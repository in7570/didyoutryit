# 배포 아키텍처 (Git → Vercel)

이 프로젝트가 코드를 고친 뒤 실제 웹사이트에 반영되기까지 어떤 경로를 거치는지 정리한 문서입니다.

## 전체 흐름

```
[내 컴퓨터]                [GitHub]                    [Vercel]
   src/*.tsx      git push      main 브랜치      webhook      빌드 서버
   (소스 코드)  ─────────────▶  (진실의 원천)  ─────────────▶  npm run build
                                                                    │
                                                                    ▼
                                                          dist/ (정적 파일)
                                                                    │
                                                                    ▼
                                                        전 세계에 배포 (CDN)
                                                     https://didyoutryit.vercel.app
```

- **GitHub**: 소스 코드의 "진실의 원천(source of truth)"입니다. 실제로 배포되는 건 여기 올라온 코드가 아니라, 이 코드를 **빌드한 결과물**입니다.
- **Vercel**: GitHub 저장소(`in7570/didyoutryit`)와 연결돼 있어서, `main` 브랜치에 새 커밋이 push될 때마다 GitHub이 Vercel에 webhook(알림)을 보내고, Vercel이 자동으로 새 빌드를 시작합니다. 별도로 "배포하기" 버튼을 누를 필요가 없습니다 — **push 자체가 배포 트리거**예요.

## 로컬에서 배포까지, 단계별

1. **개발**: `npm run dev` (Vite 개발 서버, `localhost:5173`)로 확인하면서 `src/` 아래 코드를 수정.
2. **커밋**: `git add` → `git commit` — 변경 사항을 로컬 git 저장소(내 컴퓨터 안)에 기록. 이 시점엔 아직 GitHub에도, 사이트에도 반영 안 됨.
3. **푸시**: `git push origin main` — 커밋을 GitHub 원격 저장소로 전송. **이 순간 Vercel이 자동으로 감지하고 빌드를 시작**함.
4. **빌드 (Vercel 서버에서 자동 실행)**:
   - `vercel.json`에 적힌 대로 `npm run build` 실행
   - 이 명령은 내부적으로 `tsc -b`(타입 체크) → `vite build`(번들링) 순서로 동작
   - 결과물이 `dist/` 폴더에 생성됨 (HTML + JS + CSS, 폰트 파일 등 정적 파일 묶음)
5. **배포**: Vercel이 `dist/` 내용을 CDN에 올리고, 도메인(`didyoutryit.vercel.app` 등)에 연결. 보통 push 후 몇십 초~1분 안에 반영됨.

## 왜 이런 구조인가 (예전 방식과 차이)

예전엔 `index.html` 하나가 통째로 저장소에 있었고, 그게 곧 배포되는 파일이었습니다 (빌드 단계 없음). 지금은 React + TypeScript로 작성한 **소스 코드**(`src/*.tsx`)가 저장소에 있고, 그건 브라우저가 바로 못 읽기 때문에 Vercel이 빌드 단계에서 `dist/`라는 "브라우저가 읽을 수 있는 최종 결과물"로 한 번 변환해줍니다. `dist/`는 `.gitignore`에 있어서 GitHub엔 안 올라가고, 매번 Vercel이 새로 만들어냅니다.

## 확인 방법

- GitHub에 push가 잘 됐는지: 저장소 커밋 히스토리에서 확인
- Vercel이 새로 빌드했는지: [vercel.com](https://vercel.com) 대시보드 → 이 프로젝트 → Deployments 탭에서 방금 push한 커밋 기준 빌드가 떴는지 확인 (빌드 로그, 성공/실패 여부도 여기서 보임)
- 실제 사이트: 빌드가 "Ready" 상태가 되면 배포 URL에서 바로 확인 가능

## 참고

이 세션에서는 Vercel CLI가 로그인되어 있지 않아서, push 이후 실제로 새 빌드가 성공했는지는 제가 직접 확인하지 못했습니다. Vercel 대시보드에서 최신 빌드 상태를 한번 확인해주세요 — 혹시 빌드가 실패한다면 그 로그를 저한테 보여주시면 바로 원인을 봐드릴게요.
