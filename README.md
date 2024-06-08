# 기능 요구 사항

## 할 일 목록 구현

- 하루 또는 한 주의 할 일 목록을 업데이트하는 할 일 목록을 구현합니다.
- **React** 라이브러리를 사용하여 웹 앱으로 구현합니다.

## 기본 기능

### [할 일 추가 기능 구현]

1. **할 일 입력 폼 생성**
2. **할 일 데이터 유효성 검사 (빈 문자열)**
3. **할 일 목록 업데이트**

### [할 일 삭제 기능 구현]

1. **삭제 요청 인터페이스 생성**
2. **삭제 요청 처리**
3. **할 일 목록 업데이트**

### [할 일 목록 보기 기능 구현]

1. **목록 불러오기**
2. **목록 표시**
3. **할 일 목록 업데이트**

### [할 일 완료 상태 전환 기능 구현]

1. **완료 상태 전환 인터페이스 생성**
2. **상태 전환 요청 처리**
3. **할 일 목록 업데이트**

---

## 프로그래밍 요구 사항 1

- Node.js 18.17.1 버전과 React 18에서 실행 가능해야 합니다.
- React 공식 문서를 참고하여 구현합니다.
- 프로그램 실행의 시작점은 `App.js`입니다.
- `package.json` 파일은 변경할 수 없으며, 제공된 라이브러리와 스타일 라이브러리 이외의 외부 라이브러리는 사용하지 않습니다.
- 프로그램 종료 시 `process.exit()`를 호출하지 않습니다.
- 프로그래밍 요구 사항에서 달리 명시하지 않는 한 파일, 패키지 등의 이름을 바꾸거나 이동하지 않습니다.

## 프로그래밍 요구 사항 2

- 자바스크립트 코드 컨벤션을 지키면서 프로그래밍합니다.
- 기본적으로 **Airbnb JavaScript Style Guide**를 원칙으로 합니다.
- indent(인덴트, 들여쓰기) depth를 3이 넘지 않도록 구현합니다. 2까지만 허용합니다.
  - 예: `while`문 안에 `if`문이 있으면 들여쓰기는 2입니다.
  - 힌트: indent depth를 줄이는 좋은 방법은 함수를 분리하는 것입니다.
- 함수(또는 메서드)가 한 가지 일만 하도록 최대한 작게 만들어야 합니다.
- `import` 문을 사용하여 스크립트를 모듈화하여 가져올 수 있도록 합니다.

## 프로그래밍 요구 사항 3

- 함수(또는 메서드)의 길이가 15라인을 넘어가지 않도록 구현합니다.
- 함수(또는 메서드)가 한 가지 일만 잘 하도록 구현합니다.
- 원하는 경우 TypeScript로 코드를 작성할 수 있습니다.