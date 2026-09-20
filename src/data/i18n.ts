import type { Lang, SortKey } from '../types';

export interface I18nShape {
  updateNotice: string;
  brand: string;
  tabs: Record<SortKey, string>;
  catToggle: string;
  allCategory: string;
  sortCaptions: Record<SortKey, string>;
  sourceTag: string;
  heroToday: string;
  back: string;
  modelQuestion: string;
  recommended: string;
  dlTitle: (label: string) => string;
  cpTitle: (label: string) => string;
  photoNotice: string;
  deeplinkBtn: string;
  copyBtn: string;
  openAppBtn: string;
  doneLabel: string;
  copyFail: string;
  disclaimer: string;
  themeDark: string;
  themeLight: string;
  slotFallback: (label: string) => string;
  onboardTitle: string;
  onboardBody: string;
  onboardCheck: string;
  onboardStart: string;
  showTranslation: string;
  hideTranslation: string;
  translationNote: string;
}

export const I18N: Record<Lang, I18nShape> = {
  ko: {
    updateNotice: '큐레이션 예시 데이터 · 자동 갱신 파이프라인 개발 중',
    brand: '이거 해봄?',
    tabs: {
      hot: '오늘의 HOT',
      new: '최신순',
      popular: '인기순',
      likes: '좋아요순',
    },
    catToggle: '카테고리별 보기',
    allCategory: '전체',
    sortCaptions: {
      hot: '오늘 커뮤니티에서 인기가 많은 프롬프트들이에요!',
      new: '커뮤니티에 방금 올라온 따끈따끈한 프롬프트들이에요!',
      popular: '댓글·공유까지 종합해서 화제가 된 프롬프트들이에요!',
      likes: '커뮤니티에서 좋아요(추천)를 가장 많이 받은 프롬프트들이에요!',
    },
    sourceTag: '출처: Reddit',
    heroToday: '오늘의 HOT',
    back: '← 목록',
    modelQuestion: '이 프롬프트, 어떤 AI로 써볼까요?',
    recommended: '✓ 추천',
    dlTitle: (label) => `${label}로 바로 열기 위해 입력해주세요`,
    cpTitle: (label) => `${label}용으로 프롬프트를 다듬어보세요`,
    photoNotice:
      '📷 사진이 필요한 프롬프트예요. 이동 후 직접 사진을 첨부해주세요.',
    deeplinkBtn: '➜ 딥링크로 바로 열기',
    copyBtn: '복사하기',
    openAppBtn: '앱/웹으로 이동',
    doneLabel: '나도 해봄 ✓',
    copyFail: '복사 실패 - 직접 선택해주세요',
    disclaimer:
      'AI 결과물의 특성상 같은 프롬프트라도 실행할 때마다 다른 결과가 나올 수 있어요.',
    themeDark: '🌙 다크',
    themeLight: '☀️ 라이트',
    slotFallback: (label) => `[${label}]`,
    onboardTitle: '이거 해봄?',
    onboardCheck: '다시 보지 않기',
    onboardStart: '시작하기',
    onboardBody:
      '요즘 사람들이 AI로 뭘 해보고 있는지 발견하고,\n내 상황에 바로 적용해볼 수 있는 곳이에요.\n\n마음에 드는 걸 고르면 필요한 정보만 채워서 바로 실행하거나,\n복사해서 원하는 AI에 붙여넣기만 하면 돼요.',
    showTranslation: '번역 보기',
    hideTranslation: '번역 숨기기',
    translationNote:
      '참고용 번역이에요 · 실제로 복사·전송되는 내용은 원문 그대로예요.',
  },
  en: {
    updateNotice:
      'Curated sample data · live auto-refresh pipeline in progress',
    brand: 'DiDYOUTRYiT?',
    tabs: {
      hot: "Today's HOT",
      new: 'Newest',
      popular: 'Popular',
      likes: 'Most Liked',
    },
    catToggle: 'By Category',
    allCategory: 'All',
    sortCaptions: {
      hot: 'Prompts trending in the community today!',
      new: 'Fresh prompts just posted in the community!',
      popular: 'Prompts buzzing based on comments and shares!',
      likes: 'Prompts with the most likes (upvotes) in the community!',
    },
    sourceTag: 'Source: Reddit',
    heroToday: "Today's HOT",
    back: '← Back',
    modelQuestion: 'Which AI do you want to try this with?',
    recommended: '✓ Recommended',
    dlTitle: (label) => `Fill in details to open directly in ${label}`,
    cpTitle: (label) => `Tweak this prompt for ${label}`,
    photoNotice:
      '📷 This prompt needs a photo. Please attach it yourself after you get there.',
    deeplinkBtn: '➜ Open directly',
    copyBtn: 'Copy',
    openAppBtn: 'Open app/web',
    doneLabel: 'Tried it ✓',
    copyFail: 'Copy failed - please select manually',
    disclaimer:
      'AI results vary — the same prompt can produce a different result each time.',
    themeDark: '🌙 Dark',
    themeLight: '☀️ Light',
    slotFallback: (label) => `[${label}]`,
    onboardTitle: 'DiDYOUTRYiT?',
    onboardCheck: "Don't show again",
    onboardStart: 'Get Started',
    onboardBody:
      'Discover what people are actually trying with AI right now, and try it yourself instantly.\n\nPick something you like, fill in a few details, then run it directly or copy it into your favorite AI.',
    showTranslation: 'Show translation',
    hideTranslation: 'Hide translation',
    translationNote:
      'Reference translation only · what actually gets copied or sent stays in the original language.',
  },
};
