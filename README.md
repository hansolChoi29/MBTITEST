## PROJECT: MBTI TEST

MBTI 테스트는 요즘 많은 사람들이 관심을 가지고 있는 주제이죠. 단순히 MBTI 가 진짜 신빙성이 있는지 없는지를 떠나서, 테스트 자체가 재미있기도 한데요. 이번 프로젝트에서는 바로 MBTI 성격 유형 테스트 서비스를 직접 만들어보게 됩니다!
![title](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbzcYKX%2FbtsKX6okKAL%2FvBjkLTjnyCkNdUZJK1RGL0%2Fimg.png)   

## PROJECT 목표
- 이 프로젝트는 단순한 테스트 기능을 구현하는 것뿐만 아니라, **회원가입/로그인**부터 **프로필 관리**, **테스트 결과 저장**까지 실무에서 자주 사용되는 기능들을 다뤄보는 기회입니다. 특히, 이번 프로젝트에서 다룰 **JWT 인증**과 **REST API 통신**은 실제 웹 애플리케이션 개발에서 매우 중요한 부분입니다.

- 프로젝트를 진행하면서 여러분은 **인증 및 권한 관리**를 통해 사용자의 데이터를 안전하게 보호하는 방법을 배우게 됩니다. 또한, **Axios**와 Tanstack Query(React Query)를 활용하여 비동기 데이터를 효율적으로 관리하고, **json-server**를 사용해 로컬 환경에서 API 서버를 구축하는 경험도 하게 됩니다.

- 이 과정에서 배운 기술들은 실무에서도 자주 사용되며, 특히 **JWT 인증**과 **비동기 데이터 관리**는 웹 개발의 기본이 되는 기술이니 꼭 익히셔야 합니다. 여러분은 이번 프로젝트를 통해 웹 애플리케이션을 보다 안전하고 효율적으로 설계하는 방법을 익히게 될 것입니다.</br>

## PROJECT 구조
![title](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FUtwnt%2FbtsKY10QOTz%2FV2XXgnqSs6H8ScRRNZ3qAK%2Fimg.png)   



## PROJECT 팀원소개
| 이름   | MBTI |
| ------ | ---- |
| 최한솔 | ENTJ |



## 기능 설명
1. MBTI 테스트 진행
사용자에게 일련의 질문이 주어지며, 답변을 통해 자신의 MBTI 유형을 확인할 수 있습니다.
결과는 mbtiCalculator.js를 통해 계산됩니다.
2. 테스트 결과 저장 및 관리
테스트 결과를 서버(JSON Server)에 저장할 수 있습니다.
저장된 결과를 조회하고, 공개/비공개 설정 및 삭제가 가능합니다.
비공개 결과는 작성자만 조회 가능하며, 다른 사용자는 볼 수 없습니다.
3. 사용자 인증
회원가입 및 로그인을 통해 사용자를 인증합니다.
인증된 사용자만 자신의 테스트 결과를 수정 및 삭제할 수 있습니다.
4. 반응형 UI
Tailwind CSS를 활용하여 모바일, 태블릿, 데스크톱에 최적화된 반응형 UI를 제공합니다.


 ## 주요 기술 스택
프론트엔드
React: 컴포넌트 기반 UI 라이브러리.
Vite: 빠른 개발 서버 및 번들러.
Tailwind CSS: 유틸리티 기반 CSS 프레임워크.
백엔드
JSON Server: 가상 REST API 서버.


## 핵심 컴포넌트 및 파일 설명
1. App.jsx
애플리케이션의 최상위 컴포넌트로, 모든 라우팅과 페이지 컴포넌트를 관리합니다.
2. TestResultItem.jsx
테스트 결과의 개별 항목을 렌더링.
공개 여부 토글, 삭제 기능을 포함하며 작성자 여부(isOwner)를 확인.
3. ProfilePage.jsx
로그인된 사용자의 정보를 표시.
닉네임 수정 기능을 제공하며, updateProfile API를 사용.
4. TestPage.jsx
MBTI 질문을 사용자에게 보여주고, 답변을 저장합니다.
5. TestResultPage.jsx
저장된 테스트 결과를 리스트로 보여줍니다.
비공개 결과는 작성자만 조회 가능하며, 공개 결과는 모든 사용자가 볼 수 있습니다.


