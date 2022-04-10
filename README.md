# ATEAMVENTURES ASSIGNMENT

This assignment was created based on this [Figma](https://www.figma.com/file/eUjS3RZDlexaD12MmwjZ7R/Ateamventures-%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C-%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8?node-id=0%3A1).

## Introduction

This task created a dashboard page for the Manufacturer Matching Platform - CAPA.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section.

## Required

- 견적요청카드
- 필터링
- 토글
- 빈화면
- 모바일 대응

## Approach To Implementation

### [ Data ]

- Used [json-server](https://github.com/typicode/json-server) with mock data as requests.json file.
- [http://localhost:4000](http://localhost:4000)

### [ State management ]

- React-redux
- Redux-toolkit

### [ Style ]

- styled-component

### [ Filtering ]

- 받아온 데이터에서 status가 상담중 표시된 것을 가장 최우선 순위로 두었습니다.
- status는 Toggle로 on/off를 할 수 있습니다.
- 재료와 가공법에서 각각 선택된 것은 모두 포함되게 filtering하였습니다.
- 재료, 가공법 모두에서 선택된 것은 교집합으로 filtering되게 하였습니다.
- 재료, 가공법 중 하나라도 선택된 것이 있으면 Reset이 버튼이 나타나며 클릭 시 filtering 선택지를 reset합니다.

### [ Responsive Web Design ]

- Media query를 사용하여 600px이하로 되는 경우 mobile 적용되도록 설정하였습니다.

### [ Test ]

- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) 를 바탕으로 테스트를 구현하였습니다.
- 구현 요소에 대한 Unit test를 진행하였습니다.

## Thoughts

기존에 JavaScript로만 작업을 하여 TypeScript에 대한 궁금증이 있었는데 이번 과제를 통해 TypeScript를 접해보게 되었습니다. 처음 쓰는 거라 처음에는 이걸 왜쓰지? 라는 생각이 들었는데 쓰면서 아 이래서 사람들이 이걸 쓰는 구나라고 느꼈습니다.

TypeScript로 미리 자료형에 대한 것을 정해주어 실수를 미연에 방지하고 error가 발생하더라도 더 빠르게 찾을 수 있었습니다. 만약 복잡한 구조의 코드에서 TypeScript를 사용하면 효율성을 더 높일 수 있겠구나라는 생각이 들었습니다.

데시보드를 구현하는데 있어 전반적으로 흥미롭게 진행하였습니다. filtering하는 부분이 재미있었으며 약간 효율성이 떨어지게 로직을 작성하여 아쉬웠습니다. 제출 후에도 수정할 예정입니다.

전반적으로 과제는 재미있었으며 아쉬운 점도 있었습니다. TypeScript나 미디어 쿼리를 처음 접해본 것도 좋은 경험 이었습니다.

감사합니다.
