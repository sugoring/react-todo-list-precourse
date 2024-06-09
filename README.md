# 할 일 목록(Todo List) 웹 앱

이 애플리케이션은 사용자가 할 일을 추가, 삭제, 완료 상태로 전환할 수 있는 간단한 할 일 목록(Todo List) 관리 웹 애플리케이션입니다.

----

## 기본 기능

### [할 일 추가 기능 구현]

- [x] **할 일 입력 폼 생성**
  - 사용자는 Enter 키 또는 추가 버튼을 통해 새로운 할 일을 입력할 수 있습니다.
- [x] **할 일 데이터 유효성 검사 (빈 문자열)**
  - 입력된 할 일이 빈 문자열인 경우, 경고 메시지를 표시하고 추가하지 않습니다.
- [x] **할 일 목록 업데이트**
  - 유효한 할 일은 목록에 추가되고 화면에 반영됩니다.

### [할 일 삭제 기능 구현]

- [x] **삭제 요청 인터페이스 생성**
  - 각 할 일 항목 옆에 삭제 버튼이 있습니다.
- [x] **삭제 요청 처리**
  - 사용자가 삭제 버튼을 클릭하면 해당 할 일이 목록에서 제거됩니다.

### [할 일 목록 보기 기능 구현]

- [x] **목록 불러오기**
  - 할 일 목록을 불러옵니다.
- [x] **목록 표시**
  - 불러온 할 일 목록을 화면에 표시합니다.

### [할 일 완료 상태 전환 기능 구현]

- [x] **완료 상태 전환 인터페이스 생성**
  - 각 할 일 항목 옆에 완료/미완료 버튼이 있습니다.
- [x] **상태 전환 요청 처리**
  - 사용자가 완료/미완료 버튼을 클릭하면 해당 할 일의 완료 상태가 토글됩니다.

----

## 선택 요구 사항

### [할 일 필터링]

- [x] **필터링 버튼 추가**
  - 할 일 목록 상단에 '전체', '진행 중', '완료' 버튼을 추가합니다.
- [x] **필터링 기능 구현**
  - 사용자는 이 버튼들을 클릭하여 필터링할 수 있습니다.
- [x] **실시간 필터링 반영**
  - 필터링된 목록이 화면에 반영됩니다.

### [해야 할 일의 총 개수 확인]

- [ ] **총 개수 표시 영역 추가**
  - 할 일 목록 하단에 남아있는 할 일의 총 개수를 표시합니다.
- [ ] **개별 개수 표시 옵션**
  - 완료된 할 일과 미완료된 할 일의 개수를 각각 표시합니다.

### [데이터 지속성]

- [ ] **데이터 저장 기능 구현**
  - 새로고침을 하여도 이전에 작성한 데이터는 유지됩니다.
