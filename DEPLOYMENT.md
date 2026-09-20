# 배포 아키텍처

코드를 고치고 `git push`를 하면, 실제 사이트(`didyoutryit.vercel.app`)에 반영되기까지 무슨 일이 일어나는지 정리한 문서입니다.

## 한 줄 요약

> **내 컴퓨터의 소스 코드**가 아니라, 그 코드를 **Vercel이 빌드한 결과물**이 실제로 배포됩니다. `git push`가 곧 배포 트리거입니다.

## 전체 구조

```
 ┌──────────────┐   git push   ┌──────────────┐  webhook   ┌───────────────────┐
 │   내 컴퓨터    │ ───────────▶ │    GitHub     │ ─────────▶ │       Vercel        │
 │ src/*.tsx     │              │  main 브랜치   │            │  (빌드 서버)         │
 │ (소스 코드)    │              │ (진실의 원천)  │            │                     │
 └──────────────┘              └──────────────┘            │  npm run build      │
                                                              │  = tsc -b + vite build │
                                                              └──────────┬──────────┘
                                                                         │
                                                                         ▼
                                                              ┌───────────────────┐
                                                              │   dist/ 생성        │
                                                              │ (HTML+JS+CSS+폰트)  │
                                                              └──────────┬──────────┘
                                                                         │ CDN 배포
                                                                         ▼
                                                          https://didyoutryit.vercel.app
```

## 구성 요소별 역할

| 구성 요소 | 역할 | 비고 |
|---|---|---|
| **내 컴퓨터** | `src/` 아래 React+TS 코드 작성, `npm run dev`로 로컬 확인 (`localhost:5173`) | 여기서 빌드된 걸 배포하는 게 아님 |
| **GitHub** (`in7570/didyoutryit`) | 소스 코드의 "진실의 원천". `main` 브랜치가 곧 배포 대상 | 브라우저가 직접 읽는 건 아님 |
| **Vercel** | GitHub과 연결돼 있어 `main`에 push될 때마다 자동으로 빌드·배포 실행 | 수동으로 "배포" 버튼 누를 필요 없음 |
| **CDN / 배포 URL** | Vercel이 빌드 결과(`dist/`)를 전 세계 엣지에 올림 | `didyoutryit.vercel.app` |

## 단계별 흐름

1. **개발** — `npm run dev`로 로컬(`localhost:5173`)에서 확인하며 `src/` 수정
2. **커밋** — `git add` → `git commit` (아직 GitHub·사이트엔 반영 안 됨, 내 컴퓨터 안에서만 기록)
3. **푸시** — `git push origin main` → 이 순간 GitHub이 Vercel에 webhook을 보내고, **Vercel이 자동으로 새 빌드 시작**
4. **빌드** (Vercel 서버에서 자동 실행)
   - `vercel.json`의 `buildCommand`대로 `npm run build` 실행
   - 내부적으로 `tsc -b`(타입 체크) → `vite build`(번들링) 순서
   - 결과물이 `dist/`에 생성 (HTML + JS + CSS + 폰트 등 정적 파일)
5. **배포** — Vercel이 `dist/`를 CDN에 올리고 도메인에 연결. push 후 보통 몇십 초~1분 내 반영

## 왜 예전과 다른가

| | 예전 (정적 HTML) | 지금 (React + TS) |
|---|---|---|
| 저장소에 있는 것 | 배포될 파일 그 자체 (`index.html`) | 빌드 **전** 소스 코드 (`src/*.tsx`) |
| 빌드 단계 | 없음 | Vercel이 push마다 `npm run build` 실행 |
| 브라우저가 받는 것 | 저장소의 파일 그대로 | Vercel이 만든 `dist/` 결과물 |

`dist/`는 `.gitignore`에 있어 GitHub에는 안 올라가고, Vercel이 매번 새로 만들어냅니다.

## 배포 확인하는 법

- **GitHub에 push됐는지**: 저장소 커밋 히스토리 확인
- **Vercel이 새로 빌드했는지**: [vercel.com](https://vercel.com) 대시보드 → 프로젝트 → Deployments 탭에서 방금 커밋 기준 빌드 상태(성공/실패, 로그) 확인
- **실제 사이트**: 빌드가 "Ready"가 되면 배포 URL에서 바로 확인

## 문제가 생기면

- Vercel 빌드가 실패하면 Deployments 탭의 빌드 로그를 확인 — 대부분 `tsc` 타입 에러 아니면 `npm install` 관련 문제
- 특정 배포를 되돌리고 싶으면 Vercel 대시보드 → Deployments → 이전 배포 → **Promote to Production**으로 롤백 가능 (git revert 없이도 즉시 되돌릴 수 있음)
