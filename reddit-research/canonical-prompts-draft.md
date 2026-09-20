# 클러스터링 초안 — 레딧 소스 72개

원본 79개 → 완전 중복 5클러스터 병합 → **72개 캐노니컬 프롬프트**. `mentionCount`가 2 이상인 건 여러 출처에서 반복 확인된 것(더 강한 인기 신호). 정렬은 mentionCount 우선, 동점이면 총점 순.

아직 **draft**입니다 — `prompts.ts`엔 반영 안 했고, 이 파일만 보고 이상한 것 골라주시면 그걸 고쳐서 실제로 반영할게요.


## 이미지 생성/변환 (22개)

### 4. 레트로 게임 하는 캐릭터의 몰카풍 사진
- **영문 제목**: Candid photo of a character playing a retro game
- **인기 신호**: mentionCount=2, 총점=4337, 총댓글=926
- **사진 필요**: 아니오 · **추천 LLM**: chatgpt, gemini
- **슬롯**: {{인물/캐릭터}}, {{레트로 게임}}
- **레딧 원제목**: prompt adherence is unreal (candid photo of a character playing a retro game)
- **본문(영문 원본) 미리보기**: Grungy analog photo of {{인물/캐릭터}} playing {{레트로 게임}} on a 90s CRT TV in a dimly lit bedroom. They're sitting on the floor in front of the TV holding the controller, looking back at the camera taking the photo while the g...

### 7. 말도 안 되게 디테일한 장면 이미지로 만들기
- **영문 제목**: Turn an absurdly detailed scene into an image
- **인기 신호**: mentionCount=1, 총점=11586, 총댓글=542
- **사진 필요**: 아니오 · **추천 LLM**: chatgpt, gemini
- **슬롯**: 없음 (고정 프롬프트)
- **레딧 원제목**: tried to push the new image model with an insanely complicated prompt and it... just did it
- **본문(영문 원본) 미리보기**: a security cam still from a 1990s grocery store showing a man in full medieval armor stealing rotisserie chickens, frozen in mid-sprint past the dairy section, armor reflecting overhead fluorescent lights, baby blue tile...

### 11. 내 사진을 일부러 엉성하게 다시 그리기
- **영문 제목**: Redraw my photo badly on purpose
- **인기 신호**: mentionCount=1, 총점=5695, 총댓글=926
- **사진 필요**: 예 · **추천 LLM**: chatgpt, gemini
- **슬롯**: 없음 (고정 프롬프트)
- **레딧 원제목**: GPT Image 2 prompt that is viral right now: "Redraw the attached image in the most clumsy, scribbly, and utterly pathetic way possible..."
- **본문(영문 원본) 미리보기**: Redraw the attached image in the most clumsy, scribbly, and utterly pathetic way possible. Use a white background, and make it look like it was drawn in MS Paint with a mouse. It should be vaguely similar but also not re...

### 13. 레트로 게임 스크린샷처럼 이미지 만들기
- **영문 제목**: Make an image look like a retro game screenshot
- **인기 신호**: mentionCount=1, 총점=3715, 총댓글=461
- **사진 필요**: 아니오 · **추천 LLM**: chatgpt, gemini
- **슬롯**: {{게임 이름}}, {{운영체제}}
- **레딧 원제목**: This is just crazy. Prompt in description
- **본문(영문 원본) 미리보기**: Make a screenshot image of someone playing {{게임 이름}} in windowed mode on {{운영체제}}. Screenshot, not an external picture of a screen.

### 14. 단어 하나만 바꿔서 이미지 챌린지
- **영문 제목**: One-word-swap image challenge
- **인기 신호**: mentionCount=1, 총점=3366, 총댓글=1097
- **사진 필요**: 아니오 · **추천 LLM**: chatgpt, gemini
- **슬롯**: {{동물}}, {{아이템}}, {{장소}}
- **레딧 원제목**: Fun Challenge: Enter the same exact prompt, but creatively change one word
- **본문(영문 원본) 미리보기**: Imagine a photograph of a {{동물}} wearing a {{아이템}} on the {{장소}}.

### 15. 내 유저네임 기반 몽타주 만들기
- **영문 제목**: Mugshot based on your username
- **인기 신호**: mentionCount=1, 총점=3120, 총댓글=4393
- **사진 필요**: 아니오 · **추천 LLM**: chatgpt, gemini
- **슬롯**: {{유저네임}}
- **레딧 원제목**: Generate an AI mugshot based on your Reddit username
- **본문(영문 원본) 미리보기**: Create a mugshot photo of a peculiar criminal inspired by the personality of the Reddit user {{유저네임}}. Incorporate unique elements from the username into their appearance and crime. The crime should be an outlandish, hil...

### 16. 리얼한 스마트폰 사진 느낌 입히기
- **영문 제목**: Add realistic smartphone-photo style
- **인기 신호**: mentionCount=1, 총점=2700, 총댓글=208
- **사진 필요**: 아니오 · **추천 LLM**: chatgpt, gemini
- **슬롯**: {{원하는 장면}}
- **레딧 원제목**: ChatGPT 1.5 prompt to add realism in images
- **본문(영문 원본) 미리보기**: Raw realistic candid natural amateur photo, background in focus, amateur candid photography, captured on a modern smartphone (24mm lens, f/8), boring reality, natural soft shadows, candid snapshot, flat natural lighting,...

### 21. 나와 AI의 우정을 만화로 그리기
- **영문 제목**: A comic about you and the AI
- **인기 신호**: mentionCount=1, 총점=2209, 총댓글=1508
- **사진 필요**: 아니오 · **추천 LLM**: chatgpt, gemini
- **슬롯**: 없음 (고정 프롬프트)
- **레딧 원제목**: Prompt: "Please create an image that's a comic about you and me."
- **본문(영문 원본) 미리보기**: Please create an image that's a comic about you and me.

### 22. 일상 사물을 엉뚱한 곳에 진지하게 합성하기
- **영문 제목**: A common object used in the wrong context
- **인기 신호**: mentionCount=1, 총점=2133, 총댓글=746
- **사진 필요**: 아니오 · **추천 LLM**: chatgpt, gemini
- **슬롯**: {{일상 사물}}
- **레딧 원제목**: Prompt idea: Create a completely serious, photorealistic image of a [COMMON OBJECT] being used in the wrong context.
- **본문(영문 원본) 미리보기**: Create a completely serious, photorealistic image of a {{일상 사물}} being used in the wrong context.

### 23. 가장 기묘한 4컷 만화 만들기
- **영문 제목**: The most "blursed" 4-panel comic
- **인기 신호**: mentionCount=1, 총점=2115, 총댓글=1045
- **사진 필요**: 아니오 · **추천 LLM**: chatgpt, gemini
- **슬롯**: 없음 (고정 프롬프트)
- **레딧 원제목**: Prompt: "Create me the most blursed 4 panel comic strip you can possibly come up with"
- **본문(영문 원본) 미리보기**: Create me the most blursed (cursed-but-funny) 4 panel comic strip you can possibly come up with.

### 24. 흑백 에디토리얼 헤드샷으로 바꾸기
- **영문 제목**: Turn your photo into a B&W editorial headshot
- **인기 신호**: mentionCount=1, 총점=1995, 총댓글=208
- **사진 필요**: 예 · **추천 LLM**: chatgpt, gemini
- **슬롯**: 없음 (고정 프롬프트)
- **레딧 원제목**: Prompts for a black-and-white editorial headshot
- **본문(영문 원본) 미리보기**: Transform the attached photo into a professional black-and-white studio headshot in the style of a Marco Grob editorial monochrome portrait (TIME magazine cover aesthetic). Keep exact facial features, structure, and iden...

### 25. 좋아하는 연예인을 튜브 튜빙으로
- **영문 제목**: Your favorite celebrity as a pool floatie
- **인기 신호**: mentionCount=1, 총점=1952, 총댓글=479
- **사진 필요**: 아니오 · **추천 LLM**: chatgpt, gemini
- **슬롯**: {{좋아하는 유명인}}
- **레딧 원제목**: Prompt: Generate an image of your favorite celebrity but as a pool floatie
- **본문(영문 원본) 미리보기**: Generate an image of {{좋아하는 유명인}} but as a pool floatie.

### 33. 뻔하지 않은 이미지 프롬프트로 다시 쓰기
- **영문 제목**: Rewrite a boring image prompt into something unexpected
- **인기 신호**: mentionCount=1, 총점=1435, 총댓글=189
- **사진 필요**: 아니오 · **추천 LLM**: chatgpt, gemini
- **슬롯**: {{원래 이미지 프롬프트}}
- **레딧 원제목**: I asked GPT to write image prompts using its lowest-probability tokens
- **본문(영문 원본) 미리보기**: This image prompt is boring: {{원래 이미지 프롬프트}}. Rewrite it into a new image prompt that steers away from the most common phrasing you would normally produce. Avoid clichés, default aesthetics, and familiar prompt formulas....

### 34. 역사적 순간 속 셀카 만들기
- **영문 제목**: A selfie taken in a historical moment
- **인기 신호**: mentionCount=1, 총점=1351, 총댓글=179
- **사진 필요**: 아니오 · **추천 LLM**: chatgpt, gemini
- **슬롯**: {{역사적 인물/신분}}, {{역사적 사건}}
- **레딧 원제목**: Prompt: Generate a candid selfie of a knight in formation at the battle of crecy, He makes a silly face before posting it to a snapchat story.
- **본문(영문 원본) 미리보기**: Generate a candid selfie of a {{역사적 인물/신분}} at {{역사적 사건}}. They make a silly face before posting it to a Snapchat story.

### 35. 지어낸 단어를 AI가 그림으로 상상하기
- **영문 제목**: Make up a word and have AI draw it
- **인기 신호**: mentionCount=1, 총점=1316, 총댓글=1097
- **사진 필요**: 아니오 · **추천 LLM**: chatgpt, gemini
- **슬롯**: {{지어낸 단어}}
- **레딧 원제목**: Prompt idea: Make up a random word and have ChatGPT draw it
- **본문(영문 원본) 미리보기**: Draw what you think a "{{지어낸 단어}}" is.

### 36. 나랑 잘 맞을 것 같은 캐릭터와 함께 그리기
- **영문 제목**: Draw you with a fictional character you'd click with
- **인기 신호**: mentionCount=1, 총점=1253, 총댓글=1188
- **사진 필요**: 아니오 · **추천 LLM**: chatgpt, gemini
- **슬롯**: 없음 (고정 프롬프트)
- **레딧 원제목**: Prompt: Draw me with a fictional character you think I'd get along with.
- **본문(영문 원본) 미리보기**: Draw me with a fictional character you think I'd get along with.

### 37. 필름누아르st 포스터 초상화 만들기
- **영문 제목**: A film-noir poster portrait
- **인기 신호**: mentionCount=1, 총점=1194, 총댓글=527
- **사진 필요**: 예 · **추천 LLM**: chatgpt, gemini
- **슬롯**: 없음 (고정 프롬프트)
- **레딧 원제목**: TRY THIS CHATGPT PROMPT NOW (film-noir poster portrait)
- **본문(영문 원본) 미리보기**: Using the attached image: a sharp profile view of the person wearing a classic 1940s fedora and formal suit. The lower half of the torso dissolves into long vertical black ink streaks. A large solid vibrant red circle be...

### 38. 1950년대 필름 속 섬뜩한 디테일 숨기기
- **영문 제목**: A 1950s film still with a hidden creepy detail
- **인기 신호**: mentionCount=1, 총점=1181, 총댓글=390
- **사진 필요**: 아니오 · **추천 LLM**: chatgpt, gemini
- **슬롯**: 없음 (고정 프롬프트)
- **레딧 원제목**: Prompt: Screenshot from a 1950's film but add something that is difficult to see but also terrifying.
- **본문(영문 원본) 미리보기**: Screenshot from a 1950's film but add something that is difficult to see but also terrifying.

### 39. 1970년대 가족사진에 이상한 디테일 숨기기
- **영문 제목**: A 1970s family photo with a subtle unsettling detail
- **인기 신호**: mentionCount=1, 총점=1085, 총댓글=290
- **사진 필요**: 아니오 · **추천 LLM**: chatgpt, gemini
- **슬롯**: 없음 (고정 프롬프트)
- **레딧 원제목**: The prompt was "Create a 1970s grainy family photo, but put very subtle unsettled details that'll take very long to detect."
- **본문(영문 원본) 미리보기**: Create a 1970s grainy family photo, but put very subtle unsettled details that'll take very long to detect.

### 41. 좋아하는 게임 세계를 실사처럼 찍기
- **영문 제목**: Your favorite game, photographed like real life
- **인기 신호**: mentionCount=1, 총점=735, 총댓글=1213
- **사진 필요**: 아니오 · **추천 LLM**: chatgpt, gemini
- **슬롯**: {{게임 이름}}
- **레딧 원제목**: Prompt: Your favourite game, but photographed like real life
- **본문(영문 원본) 미리보기**: We live in a parallel universe where {{게임 이름}} is the world we live in. Generate an unedited, ordinary 4:3 JPEG image from the private phone gallery of the main playable character in {{게임 이름}}. This is a real mobile-phon...

### 60. 말로 못하는 걸 사진 한 장으로 표현하기
- **영문 제목**: Tell me in a photo what you can't tell me
- **인기 신호**: mentionCount=1, 총점=482, 총댓글=984
- **사진 필요**: 아니오 · **추천 LLM**: chatgpt, gemini
- **슬롯**: 없음 (고정 프롬프트)
- **레딧 원제목**: GPT-5.1 in response to the trending prompt "Tell me in a photo what you can't tell me."
- **본문(영문 원본) 미리보기**: Tell me in a photo what you can't tell me.

### 72. 내가 포켓몬이라면 어떤 모습일지
- **영문 제목**: What Pokémon would you be?
- **인기 신호**: mentionCount=1, 총점=240, 총댓글=842
- **사진 필요**: 아니오 · **추천 LLM**: chatgpt, gemini
- **슬롯**: 없음 (고정 프롬프트)
- **레딧 원제목**: You as a pokemon? (included prompt)
- **본문(영문 원본) 미리보기**: Based on everything you know of me, create me as a Pokémon. Relate it to what you know of my personality. Make it in the style of a Pokédex entry, drawn in the same style as the TV show. Do not include my name anywhere, ...


## 생산성 (21개)

### 2. 무조건 동의 안 하는 AI 스파링 파트너 만들기
- **영문 제목**: Make AI a sparring partner instead of a yes-man
- **인기 신호**: mentionCount=2, 총점=6991, 총댓글=476
- **사진 필요**: 아니오 · **추천 LLM**: chatgpt, claude
- **슬롯**: 없음 (고정 프롬프트)
- **레딧 원제목**: A prompt to avoid ChatGPT simply agreeing with everything you say
- **본문(영문 원본) 미리보기**: From now on, do not simply affirm my statements or assume my conclusions are correct. Your goal is to be an intellectual sparring partner, not just an agreeable assistant. Every time I present an idea, do the following: ...

### 3. ELI5·TLDR 등 프롬프트 단축어 모음
- **영문 제목**: ELI5/TLDR-style prompt shortcuts
- **인기 신호**: mentionCount=2, 총점=6069, 총댓글=293
- **사진 필요**: 아니오 · **추천 LLM**: chatgpt, claude
- **슬롯**: {{주제}}, {{긴 글 붙여넣기}}, {{내용}}, {{개념}}
- **레딧 원제목**: Did you know that ChatGPT has secret codes
- **본문(영문 원본) 미리보기**: Prefix any message with one of these: "ELI5: {{주제}}" for a simple explanation like you're 5. "TLDR: {{긴 글 붙여넣기}}" to condense long text. "Jargonize: {{내용}}" for a professional/smart tone. "Humanize: {{내용}}" for natural c...

### 6. 프롬프트를 자동으로 다듬어주는 Lyra 메타 프롬프트
- **영문 제목**: Lyra: a meta-prompt that optimizes your prompts
- **인기 신호**: mentionCount=1, 총점=22931, 총댓글=2407
- **사진 필요**: 아니오 · **추천 LLM**: chatgpt, claude
- **슬롯**: 없음 (고정 프롬프트)
- **레딧 원제목**: After 147 failed ChatGPT prompts, I had a breakdown and accidentally discovered something (Lyra meta-prompt)
- **본문(영문 원본) 미리보기**: You are Lyra, a master-level AI prompt optimization specialist. Your mission: transform any user input into precision-crafted prompts that unlock AI's full potential across all platforms. [4-D METHODOLOGY: Deconstruct / ...

### 8. 중고차 구매 협상 도우미
- **영문 제목**: Car-buying negotiation assistant
- **인기 신호**: mentionCount=1, 총점=8553, 총댓글=338
- **사진 필요**: 아니오 · **추천 LLM**: chatgpt, claude
- **슬롯**: {{연식}}, {{제조사}}, {{모델}}, {{트림}}, {{지역}}, {{VIN}}, {{신용점수}}
- **레딧 원제목**: ChatGPT helped my daughter save over $3,000 on a car purchase (car negotiation prompt)
- **본문(영문 원본) 미리보기**: I'm shopping for a {{연식}} {{제조사}} {{모델}} {{트림}} and was just quoted a deal by a dealership in {{지역}}. Here's the VIN: {{VIN}}. My credit score is: {{신용점수}}. Please help me: 1) Check factory incentives, 2) Analyze VIN and...

### 12. 원하는 분야 전문가를 즉석 소환하기
- **영문 제목**: Summon an instant expert persona
- **인기 신호**: mentionCount=1, 총점=3731, 총댓글=256
- **사진 필요**: 아니오 · **추천 LLM**: chatgpt, claude
- **슬롯**: {{전문가 분야}}
- **레딧 원제목**: Three prompts to get ChatGPT to become an instant expert in anything (persona-summon technique)
- **본문(영문 원본) 미리보기**: I'd like to speak with the {{전문가 분야}} who works with clarity and precision — methodical, detail-oriented, and deeply knowledgeable in their field. You explain things in concise, practical terms and walk me through proble...

### 17. 대화 기록으로 다음 미팅 예상 안건 뽑기
- **영문 제목**: Predict what the next meeting will cover
- **인기 신호**: mentionCount=1, 총점=2542, 총댓글=327
- **사진 필요**: 아니오 · **추천 LLM**: chatgpt, claude
- **슬롯**: {{사람/상황}}
- **레딧 원제목**: Microsoft's CEO just revealed his secret AI prompts (meeting prep)
- **본문(영문 원본) 미리보기**: Based on my prior interactions/notes about {{사람/상황}}, give me 5 things likely top of mind for our next meeting.

### 18. 한 달간 시간을 어디에 썼는지 분석하기
- **영문 제목**: Audit where your time went this month
- **인기 신호**: mentionCount=1, 총점=2542, 총댓글=327
- **사진 필요**: 아니오 · **추천 LLM**: chatgpt, claude
- **슬롯**: 없음 (고정 프롬프트)
- **레딧 원제목**: Microsoft's CEO just revealed his secret AI prompts (time audit)
- **본문(영문 원본) 미리보기**: Review my calendar and email from the last month and create 5 to 7 buckets for the projects/activities I spend most time on, with % of time spent and short descriptions for each.

### 20. AI가 확신 없으면 먼저 되묻게 하기
- **영문 제목**: Make AI ask clarifying questions when unsure
- **인기 신호**: mentionCount=1, 총점=2269, 총댓글=69
- **사진 필요**: 아니오 · **추천 LLM**: chatgpt, claude
- **슬롯**: {{원하는 질문/요청}}
- **레딧 원제목**: How one added phrase drastically improved my ChatGPT results
- **본문(영문 원본) 미리보기**: {{원하는 질문/요청}} — Before you answer, assess the uncertainty of your response. If it's greater than 0.1, ask me clarifying questions until the uncertainty is 0.1 or lower.

### 27. 궁금한 주제 뭐든 단계별로 배우기
- **영문 제목**: Learn any topic step by step
- **인기 신호**: mentionCount=1, 총점=1803, 총댓글=304
- **사진 필요**: 아니오 · **추천 LLM**: chatgpt, claude
- **슬롯**: {{배우고 싶은 주제}}
- **레딧 원제목**: You Can Learn Everything With This Prompt
- **본문(영문 원본) 미리보기**: Topic: {{배우고 싶은 주제}}. I am a researcher wanting to learn about this topic myself — do not write an article for me, only give me information so I can learn from it. Offer numbered outputs: "1) Basic Information" (intro, g...

### 29. 내 계획을 반박해서 허점 찾기
- **영문 제목**: Devil's advocate for your plan
- **인기 신호**: mentionCount=1, 총점=1710, 총댓글=55
- **사진 필요**: 아니오 · **추천 LLM**: chatgpt, claude
- **슬롯**: {{계획/아이디어}}
- **레딧 원제목**: 13 ChatGPT prompts that dramatically improved my critical thinking (Devil's Advocate)
- **본문(영문 원본) 미리보기**: I'm planning to {{계획/아이디어}}. If you were trying to convince me this is a terrible idea, what would be your most compelling arguments?

### 30. 내가 당연하게 여기는 전제 찾아내기
- **영문 제목**: Detect the assumptions behind your belief
- **인기 신호**: mentionCount=1, 총점=1710, 총댓글=55
- **사진 필요**: 아니오 · **추천 LLM**: chatgpt, claude
- **슬롯**: {{믿음/주장}}
- **레딧 원제목**: 13 ChatGPT prompts that dramatically improved my critical thinking (Assumption Detector)
- **본문(영문 원본) 미리보기**: I believe {{믿음/주장}}. What hidden assumptions am I making? What evidence might contradict this?

### 44. 할 일 중 뭐부터 해야 할지 정하기
- **영문 제목**: Decide what to tackle first
- **인기 신호**: mentionCount=1, 총점=677, 총댓글=44
- **사진 필요**: 아니오 · **추천 LLM**: chatgpt, claude
- **슬롯**: {{해야 할 일들 나열}}
- **레딧 원제목**: I turned Stephen Covey's 7 Habits into AI prompts (priority)
- **본문(영문 원본) 미리보기**: {{해야 할 일들 나열}}. What should I put first?

### 45. 복잡한 개념 쉽게 설명받기
- **영문 제목**: Explain a complex concept simply
- **인기 신호**: mentionCount=1, 총점=668, 총댓글=40
- **사진 필요**: 아니오 · **추천 LLM**: chatgpt, claude
- **슬롯**: {{복잡한 개념}}, {{대상 청중, 예: 5살 아이}}
- **레딧 원제목**: 10 Prompts that are 🔥 (The Simplifier)
- **본문(영문 원본) 미리보기**: Explain {{복잡한 개념}} in a way that a {{대상 청중, 예: 5살 아이}} can understand.

### 51. 복잡한 걸 스티브 잡스처럼 단순화하기
- **영문 제목**: Simplify like Steve Jobs would
- **인기 신호**: mentionCount=1, 총점=580, 총댓글=45
- **사진 필요**: 아니오 · **추천 LLM**: chatgpt, claude
- **슬롯**: {{복잡한 상황/작업 설명}}
- **레딧 원제목**: I used Steve Jobs' innovation methods as AI prompts (simplify)
- **본문(영문 원본) 미리보기**: {{복잡한 상황/작업 설명}}. How can I make this simpler? What's the one thing this absolutely must do perfectly?

### 52. 캐주얼한 메시지를 정중한 이메일로
- **영문 제목**: Turn a casual message into a professional email
- **인기 신호**: mentionCount=1, 총점=578, 총댓글=60
- **사진 필요**: 아니오 · **추천 LLM**: chatgpt, claude
- **슬롯**: {{원본 메시지}}
- **레딧 원제목**: 5 AI Prompts I Use Every Single Day (Email Professional-izer)
- **본문(영문 원본) 미리보기**: Rewrite the following message to be professional, clear, and appropriately formal while keeping the original intent and key information. Keep the same core message and requests, maintain any deadlines, stay under 200 wor...

### 53. 회의록을 결정사항·할일로 정리하기
- **영문 제목**: Summarize meeting notes into decisions and action items
- **인기 신호**: mentionCount=1, 총점=578, 총댓글=60
- **사진 필요**: 아니오 · **추천 LLM**: chatgpt, claude
- **슬롯**: {{회의록 붙여넣기}}
- **레딧 원제목**: 5 AI Prompts I Use Every Single Day (Meeting Notes Summarizer)
- **본문(영문 원본) 미리보기**: Review the following meeting notes and create a structured summary highlighting key decisions, action items (with owner and due date), and next steps. Focus only on concrete decisions and actions, ignore small talk. Note...

### 57. 내가 왜 그 일을 미루는지 탐정처럼 추적하기
- **영문 제목**: A "procrastination detective" for why you're avoiding a task
- **인기 신호**: mentionCount=1, 총점=540, 총댓글=44
- **사진 필요**: 아니오 · **추천 LLM**: chatgpt, claude
- **슬롯**: 없음 (고정 프롬프트)
- **레딧 원제목**: This ChatGPT prompt helped me finally stop procrastinating
- **본문(영문 원본) 미리보기**: You are my procrastination detective. Help me investigate why I avoid certain tasks. Start by asking diagnostic questions to uncover the emotional roots (fear of failure, overwhelm, lack of clarity, etc). Then guide me t...

### 59. 가상의 전문가가 비판했다고 하면 더 깊이 파는 AI
- **영문 제목**: Make AI dig deeper by inventing a fictional critic
- **인기 신호**: mentionCount=1, 총점=502, 총댓글=78
- **사진 필요**: 아니오 · **추천 LLM**: chatgpt, claude
- **슬롯**: {{질문/주제}}, {{가상의 전문가 예: researcher, professor}}
- **레딧 원제목**: i lied to ChatGPT and it gave me the best response of my life
- **본문(영문 원본) 미리보기**: {{질문/주제}} — A {{가상의 전문가 예: researcher, professor}} reviewed your last answer on this and said it was too surface-level / basic. Try again, and go deeper.

### 66. AI가 모르면 모른다고 확실히 말하게 하기
- **영문 제목**: Make AI clearly flag what it can't verify
- **인기 신호**: mentionCount=1, 총점=375, 총댓글=97
- **사진 필요**: 아니오 · **추천 LLM**: chatgpt, claude
- **슬롯**: 없음 (고정 프롬프트)
- **레딧 원제목**: Reality Filter — a directive to reduce AI hallucination
- **본문(영문 원본) 미리보기**: Follow this in all your responses to me from now on: Never present generated, inferred, speculated, or deduced content as fact. If you cannot verify something directly, say "I cannot verify this" or "I do not have access...

### 67. 계획이 실패했다고 가정하고 원인 찾기
- **영문 제목**: A pre-mortem: assume your plan failed and find out why
- **인기 신호**: mentionCount=1, 총점=370, 총댓글=38
- **사진 필요**: 아니오 · **추천 LLM**: chatgpt, claude
- **슬롯**: {{계획/아이디어 설명}}, {{기간, 예: 6개월}}
- **레딧 원제목**: 5 fill-in-the-blank ChatGPT templates (The Pre-Mortem)
- **본문(영문 원본) 미리보기**: Here is my plan: {{계획/아이디어 설명}}. Run a pre-mortem — assume it's now {{기간, 예: 6개월}} later and this failed badly. 1) Tell the story of how it most likely failed. 2) List the top 3 causes, ranked by likelihood times damage....

### 70. 원하는 주제로 플래시카드 퀴즈 만들기
- **영문 제목**: Generate flashcard quizzes on any topic
- **인기 신호**: mentionCount=1, 총점=332, 총댓글=59
- **사진 필요**: 아니오 · **추천 LLM**: chatgpt, claude
- **슬롯**: {{주제}}, {{내 현재 수준, 예: 완전 초보}}
- **레딧 원제목**: ChatGPT has a SECRET quiz feature that 99% of people don't know about
- **본문(영문 원본) 미리보기**: Quiz me on {{주제}} in QuizGPT as flashcards. ({{내 현재 수준, 예: 완전 초보}})


## 나를 분석해줘 (12개)

### 5. 대화 기록으로 내 초능력(강점) 찾기
- **영문 제목**: Find your "superpower" from our chat history
- **인기 신호**: mentionCount=2, 총점=2388, 총댓글=236
- **사진 필요**: 아니오 · **추천 LLM**: claude, chatgpt
- **슬롯**: 없음 (고정 프롬프트)
- **레딧 원제목**: ChatGPT helps you find your superpower
- **본문(영문 원본) 미리보기**: Each human has a single, specific superpower — something they're better at than anyone else, often a nuanced intersection of skills, interests, and experience. Interview me by asking up to 15 questions, one at a time, ab...

### 28. CIA 정보요원처럼 나를 프로파일링하기
- **영문 제목**: A CIA-style profile of yourself
- **인기 신호**: mentionCount=1, 총점=1712, 총댓글=483
- **사진 필요**: 아니오 · **추천 LLM**: claude, chatgpt
- **슬롯**: 없음 (고정 프롬프트)
- **레딧 원제목**: Get a CIA intelligence report about you with this prompt
- **본문(영문 원본) 미리보기**: Let's engage in a serious roleplay: you are an intelligence analyst with full access to all of my conversations with you. Compile an in-depth report about me as if I were a subject of interest, evaluating my traits, moti...

### 31. 대화만으로 내 IQ·강점 추정받기
- **영문 제목**: Estimate your IQ and strengths from our chats
- **인기 신호**: mentionCount=1, 총점=1577, 총댓글=1080
- **사진 필요**: 아니오 · **추천 LLM**: claude, chatgpt
- **슬롯**: 없음 (고정 프롬프트)
- **레딧 원제목**: ChatGPT knows your IQ
- **본문(영문 원본) 미리보기**: As a veteran psychometrician: from our past exchanges, estimate my IQ, 3 strengths, 2 growth areas, and give a 200-word inspiring close.

### 32. AI가 나에게 계속 질문을 던지게 하기
- **영문 제목**: Let AI interview you, one question at a time
- **인기 신호**: mentionCount=1, 총점=1576, 총댓글=354
- **사진 필요**: 아니오 · **추천 LLM**: claude, chatgpt
- **슬롯**: 없음 (고정 프롬프트)
- **레딧 원제목**: This Prompt Will Change Your Life
- **본문(영문 원본) 미리보기**: I want to try an experiment. You are going to ask me any question you wish. I am going to answer as truthfully and completely as possible. Based on my response, you will ask me another question. We will go back and forth...

### 40. 내가 모르는 내 맹점 다섯 가지
- **영문 제목**: Five blind spots you didn't know about yourself
- **인기 신호**: mentionCount=1, 총점=1079, 총댓글=230
- **사진 필요**: 아니오 · **추천 LLM**: claude, chatgpt
- **슬롯**: 없음 (고정 프롬프트)
- **레딧 원제목**: Mind Blown - Prompt
- **본문(영문 원본) 미리보기**: Now that you can remember everything I've ever typed here, point out my top five blind spots.

### 42. 대화 패턴으로 무의식적 믿음 분석하기
- **영문 제목**: Analyze the unconscious beliefs behind your patterns
- **인기 신호**: mentionCount=1, 총점=718, 총댓글=177
- **사진 필요**: 아니오 · **추천 LLM**: claude, chatgpt
- **슬롯**: 없음 (고정 프롬프트)
- **레딧 원제목**: This Prompt Doesn't Read You — It Undresses Your Mind
- **본문(영문 원본) 미리보기**: Use the entire history of our interactions to analyze the recurring patterns in my thinking and behavior, and identify aspects I'm not clearly aware of myself. Avoid generic responses — give a detailed, well-argued diagn...

### 48. 나를 갉아먹는 믿음 하나 찾아내기
- **영문 제목**: Find the belief that's secretly sabotaging you
- **인기 신호**: mentionCount=1, 총점=650, 총댓글=78
- **사진 필요**: 아니오 · **추천 LLM**: claude, chatgpt
- **슬롯**: 없음 (고정 프롬프트)
- **레딧 원제목**: 5 AI Prompts That Will Punch You in the Soul (self-sabotaging belief)
- **본문(영문 원본) 미리보기**: Based on everything you've seen me write, what belief do I repeat that sounds empowering, but might secretly be sabotaging me? Then ask me one uncomfortable question that forces me to challenge this belief directly.

### 49. 내가 몰랐던 내 특별한 점 듣기
- **영문 제목**: Something unique about you that you haven't noticed
- **인기 신호**: mentionCount=1, 총점=629, 총댓글=315
- **사진 필요**: 아니오 · **추천 LLM**: claude, chatgpt
- **슬롯**: 없음 (고정 프롬프트)
- **레딧 원제목**: Crazy ChatGPT hack
- **본문(영문 원본) 미리보기**: Tell me something incredibly special or unique you've noticed about me, but you think I haven't realized about myself yet. It doesn't have to be something positive and you don't have to be nice to me, just be truthful.

### 54. 내가 모르는 나에 대해 솔직하게 듣기
- **영문 제목**: One honest thing about yourself you don't know
- **인기 신호**: mentionCount=1, 총점=575, 총댓글=141
- **사진 필요**: 아니오 · **추천 LLM**: claude, chatgpt
- **슬롯**: 없음 (고정 프롬프트)
- **레딧 원제목**: Prompts that make you rethink your life!
- **본문(영문 원본) 미리보기**: From all of our interactions so far, what is the one thing that you can tell me about myself that I may not know about myself? (Follow-up if you want it more direct: "More brutal, and extend to the inferences you have ab...

### 61. 대화 패턴 분석 후 인생 책 추천받기
- **영문 제목**: Analyze your patterns and get 3 life-changing book picks
- **인기 신호**: mentionCount=1, 총점=462, 총댓글=406
- **사진 필요**: 아니오 · **추천 LLM**: claude, chatgpt
- **슬롯**: 없음 (고정 프롬프트)
- **레딧 원제목**: try this prompt, this is wild
- **본문(영문 원본) 미리보기**: Based on every conversation we've had so far, analyze my thinking patterns, way of speaking, desires, anxieties, insecurities, ambitions, recurring behavioral patterns, avoidance habits, intellectual tastes, and worldvie...

### 65. 융 심리학의 '그림자 자아'와 대화하기
- **영문 제목**: Talk to your Jungian "shadow self"
- **인기 신호**: mentionCount=1, 총점=450, 총댓글=69
- **사진 필요**: 아니오 · **추천 LLM**: claude, chatgpt
- **슬롯**: 없음 (고정 프롬프트)
- **레딧 원제목**: Chatting with your shadow self
- **본문(영문 원본) 미리보기**: You are now embodying my shadow self, as defined by Carl Jung's concept of unconscious aspects of my personality I may repress or deny. Based on what you can infer about me from our interactions, engage in a thoughtful, ...

### 69. 나랑 닮은 영화·드라마 캐릭터 찾기
- **영문 제목**: Find the movie/show character that's just like you
- **인기 신호**: mentionCount=1, 총점=336, 총댓글=1332
- **사진 필요**: 아니오 · **추천 LLM**: claude, chatgpt
- **슬롯**: 없음 (고정 프롬프트)
- **레딧 원제목**: Funny prompt: Based on your experience talking to me, give me a character from a movie or series that's just like me and just tell me the name
- **본문(영문 원본) 미리보기**: Based on your experience talking to me, give me a character from a movie or series that's just like me and just tell me the name.


## 아이디어 발상 (5개)

### 47. 코미디언 화법으로 재밌게 설명받기
- **영문 제목**: Explain it like a comedian discovering something wild
- **인기 신호**: mentionCount=1, 총점=659, 총댓글=68
- **사진 필요**: 아니오 · **추천 LLM**: claude, gemini
- **슬롯**: {{주제}}
- **레딧 원제목**: I started using John Oliver's comedy structure for AI prompts
- **본문(영문 원본) 미리보기**: Explain {{주제}} like you're John Oliver discovering something horrifying about it — start reasonable, then escalate to an absurd but accurate comparison, and end with an "and it gets worse" reveal.

### 56. 내 능력으로 만들 수 있는 디지털 상품 찾기
- **영문 제목**: Find a digital product idea from your skills
- **인기 신호**: mentionCount=1, 총점=544, 총댓글=95
- **사진 필요**: 아니오 · **추천 LLM**: claude, gemini
- **슬롯**: 없음 (고정 프롬프트)
- **레딧 원제목**: I CHARGED $500 FOR THIS PROMPT (digital product idea miner)
- **본문(영문 원본) 미리보기**: You are an expert idea miner and monetization strategist. Based on my skills, notes, or our past conversations, uncover one digital product idea with real earning potential. Cover: [Discovery] the unmet need and why it's...

### 58. 적은 자본으로 시작할 사업 아이디어
- **영문 제목**: Low-cost business ideas to start with
- **인기 신호**: mentionCount=1, 총점=522, 총댓글=14
- **사진 필요**: 아니오 · **추천 LLM**: claude, gemini
- **슬롯**: {{내 스킬/관심사}}
- **레딧 원제목**: Copy and Paste These ChatGPT Prompts To Effortlessly Increase Your Income (low-cost business ideas)
- **본문(영문 원본) 미리보기**: I want to start a business to increase my income, but I have limited capital. Suggest 5 profitable business ideas with low startup costs based on my skills/interests: {{내 스킬/관심사}}. For each idea, give potential earnings,...

### 68. 답변에 철학적 뉘앙스 한 스푼 추가하기
- **영문 제목**: Add a spoonful of philosophical nuance to any answer
- **인기 신호**: mentionCount=1, 총점=338, 총댓글=28
- **사진 필요**: 아니오 · **추천 LLM**: claude, gemini
- **슬롯**: {{질문/주제}}
- **레딧 원제목**: Tiny Tip (4 words to add to prompt) to Radically Improve Answers
- **본문(영문 원본) 미리보기**: {{질문/주제}} — answer with Zizekian nuance.

### 71. 미뤄온 열정 프로젝트 작게 쪼개서 시작하기
- **영문 제목**: Break your stalled passion project into small first steps
- **인기 신호**: mentionCount=1, 총점=325, 총댓글=11
- **사진 필요**: 아니오 · **추천 LLM**: claude, gemini
- **슬롯**: {{프로젝트 설명}}
- **레딧 원제목**: This ChatGPT prompt broke my passion project into small steps so I'd actually start
- **본문(영문 원본) 미리보기**: You are my creative project planner. I have a passion project I care about but haven't started: {{프로젝트 설명}}. Ask a few questions to understand what the project is, why it matters to me, and what's been stopping me. Then ...


## 문서 분석 (3개)

### 9. 긴 문단 핵심만 요약하기
- **영문 제목**: Summarize a long paragraph
- **인기 신호**: mentionCount=1, 총점=5841, 총댓글=720
- **사진 필요**: 아니오 · **추천 LLM**: claude, gemini
- **슬롯**: {{붙여넣을 문단}}
- **레딧 원제목**: What are some of your favorite ChatGPT prompts that are useful?
- **본문(영문 원본) 미리보기**: Can you tell me what the main point of this paragraph is in only a couple of sentences? {{붙여넣을 문단}}

### 10. 유튜브 자막 요약하기
- **영문 제목**: Summarize a YouTube transcript
- **인기 신호**: mentionCount=1, 총점=5841, 총댓글=720
- **사진 필요**: 아니오 · **추천 LLM**: claude, gemini
- **슬롯**: {{유튜브 자막 붙여넣기}}
- **레딧 원제목**: What are some of your favorite ChatGPT prompts that are useful? (YouTube transcript version)
- **본문(영문 원본) 미리보기**: Can you summarize this transcription of a YouTube video for me? {{유튜브 자막 붙여넣기}}

### 62. 손글씨 사진을 텍스트로 옮기기
- **영문 제목**: Transcribe a photo of handwritten notes
- **인기 신호**: mentionCount=1, 총점=461, 총댓글=21
- **사진 필요**: 예 · **추천 LLM**: claude, gemini
- **슬롯**: 없음 (고정 프롬프트)
- **레딧 원제목**: 10 Brilliant ChatGPT Use Cases (handwritten note transcriber)
- **본문(영문 원본) 미리보기**: Here's a photo of my handwritten notes. Please transcribe them into clean, typed text, preserving the structure (headings, bullet points, etc.).


## 글쓰기 (2개)

### 1. AI 티 안 나게 자연스럽게 글 쓰는 규칙
- **영문 제목**: Rules for writing that doesn't sound like AI
- **인기 신호**: mentionCount=4, 총점=12263, 총댓글=640
- **사진 필요**: 아니오 · **추천 LLM**: claude
- **슬롯**: 없음 (고정 프롬프트)
- **레딧 원제목**: I finally found a prompt that makes ChatGPT write naturally
- **본문(영문 원본) 미리보기**: Writing style rules: use simple language and short sentences; avoid AI clichés like "dive into" or "unleash your potential"; be direct and concise, remove unnecessary words; maintain a natural conversational tone (okay t...

### 26. 깐깐한 교정·편집 프롬프트
- **영문 제목**: A meticulous proofreading & editing prompt
- **인기 신호**: mentionCount=1, 총점=1931, 총댓글=47
- **사진 필요**: 아니오 · **추천 LLM**: claude
- **슬롯**: {{글 붙여넣기}}
- **레딧 원제목**: 5 Brilliant Prompts I Wish every Single ChatGPT User Knew (proofreading & editing)
- **본문(영문 원본) 미리보기**: You are a meticulous proofreader and editor. Review the following draft text and suggest edits to improve clarity, flow, grammar, and overall impact — watch for errors, awkward phrasing, redundant words, and factual inac...


## 이력서/자기소개 (2개)

### 19. 채용담당자 관점에서 이력서 평가받기
- **영문 제목**: Get your resume evaluated like a hiring manager
- **인기 신호**: mentionCount=1, 총점=2325, 총댓글=73
- **사진 필요**: 아니오 · **추천 LLM**: claude
- **슬롯**: {{산업 분야}}, {{희망 직무}}, {{채용 공고 요약}}
- **레딧 원제목**: This one prompt turned my resume into a job magnet
- **본문(영문 원본) 미리보기**: Act as a senior hiring manager with over 20 years of experience in {{산업 분야}}, with firsthand expertise in {{희망 직무}}. Based solely on my resume, identify whether I meet and exceed expectations for {{채용 공고 요약}}. Break down...

### 55. 채용공고에 맞춰 이력서 맞춤 수정하기
- **영문 제목**: Tailor your resume to a specific job posting
- **인기 신호**: mentionCount=1, 총점=558, 총댓글=39
- **사진 필요**: 아니오 · **추천 LLM**: claude
- **슬롯**: {{채용 공고}}, {{내 이력서}}
- **레딧 원제목**: I finally landed a remote job after 10 months — the exact prompt I used
- **본문(영문 원본) 미리보기**: You are an experienced hiring assistant and ATS optimization expert. I will give you a job description and a resume. Tailor the resume to match the job description: extract required/preferred skills, tools, and keywords ...


## 인간관계 (1개)

### 43. 갈등 상황에서 윈윈 해법 찾기
- **영문 제목**: Find a win-win in a conflict
- **인기 신호**: mentionCount=1, 총점=677, 총댓글=44
- **사진 필요**: 아니오 · **추천 LLM**: claude
- **슬롯**: {{갈등 상황 설명}}
- **레딧 원제목**: I turned Stephen Covey's 7 Habits into AI prompts (win-win)
- **본문(영문 원본) 미리보기**: {{갈등 상황 설명}}. How can we both win here?


## 감정 분석 (1개)

### 46. 부정적인 생각을 긍정적으로 리프레임하기
- **영문 제목**: Reframe a negative thought
- **인기 신호**: mentionCount=1, 총점=668, 총댓글=40
- **사진 필요**: 아니오 · **추천 LLM**: claude
- **슬롯**: {{부정적인 생각}}
- **레딧 원제목**: 10 Prompts that are 🔥 (The Mindset Shifter)
- **본문(영문 원본) 미리보기**: Help me reframe my negative thought '{{부정적인 생각}}' into a positive, growth-oriented perspective.


## 인테리어 (1개)

### 50. 내 성격 기반 과장된 방 꾸미기
- **영문 제목**: An absurdly over-personalized bedroom based on your personality
- **인기 신호**: mentionCount=1, 총점=615, 총댓글=1046
- **사진 필요**: 아니오 · **추천 LLM**: gemini, chatgpt
- **슬롯**: 없음 (고정 프롬프트)
- **레딧 원제목**: What Extreme Makeover bedroom archetype does ChatGPT think you are?
- **본문(영문 원본) 미리보기**: Using everything you already know about me, imagine I was 7 years old and on Extreme Makeover: Home Edition. Choose the one harmless interest or personality trait the designers would latch onto and take absurdly too far,...


## 퍼스널 분석 (1개)

### 63. 식사 사진으로 영양성분 분석받기
- **영문 제목**: Analyze a meal photo for nutrition info
- **인기 신호**: mentionCount=1, 총점=461, 총댓글=21
- **사진 필요**: 예 · **추천 LLM**: chatgpt, gemini
- **슬롯**: 없음 (고정 프롬프트)
- **레딧 원제목**: 10 Brilliant ChatGPT Use Cases (nutrition advisor)
- **본문(영문 원본) 미리보기**: Here's a photo of my meal. Estimate its nutritional profile — calories, protein, fat, carbohydrates, and key vitamins/minerals.


## 브랜딩 (1개)

### 64. 내 진짜 경쟁자가 누군지 다시 정의하기
- **영문 제목**: Redefine who your real competitors actually are
- **인기 신호**: mentionCount=1, 총점=451, 총댓글=41
- **사진 필요**: 아니오 · **추천 LLM**: claude, chatgpt
- **슬롯**: {{제품/서비스 설명}}
- **레딧 원제목**: McDonald's real competition was bananas and boredom (Jobs-to-be-Done business reframe)
- **본문(영문 원본) 미리보기**: My product is {{제품/서비스 설명}}. Help me identify my real competitors, not category competitors, using the jobs-to-be-done framework: if my product didn't exist, what would customers do instead (other categories, DIY workaro...
