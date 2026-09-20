import type { Prompt } from "../types";

export const prompts: Prompt[] = [
  {
    id: 1,
    rank: 1,
    trend: "up",
    category: "글쓰기",
    category_en: "Writing",
    title: "1년 후의 내가 지금 나에게 쓰는 편지",
    title_en: "A letter from my future self, one year from now",
    recommend: ["claude", "chatgpt"],
    needsPhoto: false,
    templateLang: "ko",
    template:
      "내가 최근에 나눈 대화 내용을 참고해서, {{기간}} 뒤의 내가 지금의 나에게 쓰는 편지를 써줘. 지금 내 고민은 '{{고민}}'이야. 담담하고 다정한 어조로 써줘.",
    templateTranslated:
      "Based on the conversations we've recently had, write a letter from my future self [Time span] from now to me today. My current worry is '[Current worry]'. Write it in a calm, warm tone.",
    slots: [
      { key: "기간", label: "기간", label_en: "Time span", placeholder: "예: 1년", placeholder_en: "e.g. 1 year" },
      { key: "고민", label: "요즘 고민", label_en: "Current worry", placeholder: "예: 진로 방향", placeholder_en: "e.g. career direction" },
    ],
  },
  {
    id: 2,
    rank: 2,
    trend: "same",
    category: "퍼스널 분석",
    category_en: "Personal analysis",
    title: "얼굴 사진으로 어울리는 헤어스타일 찾아주기",
    title_en: "Find a hairstyle that suits your face photo",
    recommend: ["gemini", "chatgpt"],
    needsPhoto: true,
    templateLang: "ko",
    template:
      "내 얼굴 사진을 보고 얼굴형, 피부톤, 분위기를 분석해서 어울리는 헤어스타일 3가지와 이유를 알려줘. {{선호}} 위주로 추천해줘.",
    templateTranslated:
      "Look at my face photo and analyze my face shape, skin tone, and vibe, then suggest 3 hairstyles that would suit me with reasons. Focus your recommendations on [Preferred style].",
    slots: [
      { key: "선호", label: "선호 스타일", label_en: "Preferred style", placeholder: "예: 커트, 단발 등", placeholder_en: "e.g. cut, bob, etc." },
    ],
  },
  {
    id: 3,
    rank: 3,
    trend: "new",
    category: "나를 분석해줘",
    category_en: "Analyze me",
    title: "그동안의 대화로 내 장단점 분석해주기",
    title_en: "Analyze my strengths and weaknesses from our chats",
    recommend: ["claude", "chatgpt"],
    needsPhoto: false,
    templateLang: "ko",
    template:
      "지금까지 나와 나눈 대화들을 바탕으로 내 성향, 사고방식, 반복되는 패턴을 분석해줘. 장점과 단점을 각각 3가지씩, 근거가 된 대화 맥락과 함께 알려줘.",
    templateTranslated:
      "Based on everything we've talked about so far, analyze my personality, way of thinking, and recurring patterns. Give me 3 strengths and 3 weaknesses each, along with the conversation context behind each one.",
    slots: [],
  },
  {
    id: 4,
    rank: 4,
    trend: "down",
    category: "인테리어",
    category_en: "Interior",
    title: "사진 속 방 분위기에 어울리는 소품 추천",
    title_en: "Recommend decor that fits your room's vibe",
    recommend: ["gemini"],
    needsPhoto: true,
    templateLang: "ko",
    template:
      "내 방 사진을 보고 지금 분위기를 분석해서 어울리는 소품을 추천해줘. 예산은 {{예산}} 정도야. {{스타일}} 느낌으로 바꾸고 싶어.",
    templateTranslated:
      "Look at my room photo, analyze its current vibe, and recommend decor that would suit it. My budget is around [Budget]. I want to shift the feel toward [Desired style].",
    slots: [
      { key: "예산", label: "예산", label_en: "Budget", placeholder: "예: 10만원", placeholder_en: "e.g. $80" },
      { key: "스타일", label: "원하는 스타일", label_en: "Desired style", placeholder: "예: 미니멀, 빈티지 등", placeholder_en: "e.g. minimal, vintage" },
    ],
  },
  {
    id: 5,
    rank: 5,
    trend: "up",
    category: "연애 상담",
    category_en: "Relationship advice",
    title: "대화 캡처 보내면 상대방 심리 분석",
    title_en: "Analyze their mindset from a chat screenshot",
    recommend: ["claude"],
    needsPhoto: true,
    templateLang: "ko",
    template:
      "이 대화 캡처를 보고 상대방이 지금 어떤 마음인 것 같은지, 뉘앙스와 맥락을 중심으로 분석해줘. 내 상황은 '{{상황}}'이야.",
    templateTranslated:
      "Look at this chat screenshot and analyze what the other person's mindset seems to be, focusing on nuance and context. My situation is '[One-line context]'.",
    slots: [
      { key: "상황", label: "내 상황 한 줄 설명", label_en: "One-line context", placeholder: "예: 최근 연락이 뜸해짐", placeholder_en: "e.g. they've been distant lately" },
    ],
  },
  {
    id: 6,
    rank: 6,
    trend: "same",
    category: "여행",
    category_en: "Travel",
    title: "혼자 여행 가기 좋은 코스 짜주기",
    title_en: "Plan a solo travel itinerary",
    recommend: ["gemini", "chatgpt"],
    needsPhoto: false,
    templateLang: "ko",
    template:
      "{{도시}}로 혼자 {{기간}} 여행 가려고 해. 여행 스타일은 '{{스타일}}'이야. 이동 동선까지 고려한 일정을 짜줘.",
    templateTranslated:
      "I'm planning a solo trip to [Destination] for [Duration]. My travel style is '[Travel style]'. Plan an itinerary that also accounts for travel routes between stops.",
    slots: [
      { key: "도시", label: "여행지", label_en: "Destination", placeholder: "예: 후쿠오카", placeholder_en: "e.g. Fukuoka" },
      { key: "기간", label: "기간", label_en: "Duration", placeholder: "예: 2박3일", placeholder_en: "e.g. 3 days" },
      { key: "스타일", label: "여행 스타일", label_en: "Travel style", placeholder: "예: 느긋하게, 맛집 위주", placeholder_en: "e.g. relaxed, foodie-focused" },
    ],
  },
  {
    id: 7,
    rank: 7,
    trend: "new",
    category: "아이디어 발상",
    category_en: "Brainstorming",
    title: "막힌 프로젝트 아이디어 여러 방향으로 확장하기",
    title_en: "Expand a stuck project idea in new directions",
    recommend: ["claude", "gemini"],
    needsPhoto: false,
    templateLang: "ko",
    template:
      "지금 진행 중인 프로젝트는 '{{프로젝트}}'이고, 막힌 지점은 '{{막힌지점}}'이야. 완전히 다른 3가지 방향으로 아이디어를 확장해줘.",
    templateTranslated:
      "The project I'm currently working on is '[Project in one line]', and I'm stuck at '[Where you're stuck]'. Expand this into 3 completely different directions.",
    slots: [
      { key: "프로젝트", label: "프로젝트 한 줄 설명", label_en: "Project in one line", placeholder: "예: AI 트렌드 웹앱", placeholder_en: "e.g. AI trend web app" },
      { key: "막힌지점", label: "막힌 부분", label_en: "Where you're stuck", placeholder: "예: 브랜딩 방향", placeholder_en: "e.g. branding direction" },
    ],
  },
  {
    id: 8,
    rank: 8,
    trend: "down",
    category: "사주/타로",
    category_en: "Fortune/Tarot",
    title: "AI 타로로 오늘의 조언 받기",
    title_en: "Get today's advice from an AI tarot reading",
    recommend: ["chatgpt"],
    needsPhoto: false,
    templateLang: "ko",
    template:
      "타로 마스터처럼 카드 3장(과거-현재-미래)을 뽑아서 나에게 오늘의 조언을 해줘. 지금 궁금한 건 '{{질문}}'이야. 몰입감 있게 진행해줘.",
    templateTranslated:
      "Act like a tarot master and draw 3 cards (past-present-future) to give me today's advice. What I'm curious about right now is '[What's on your mind]'. Make it feel immersive.",
    slots: [
      { key: "질문", label: "궁금한 것", label_en: "What's on your mind", placeholder: "예: 이직 타이밍", placeholder_en: "e.g. timing of a job change" },
    ],
  },
];
