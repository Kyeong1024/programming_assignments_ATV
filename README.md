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
