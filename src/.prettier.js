// 자바스크립트 프리티어 설정 파일
module.exports = {
  singleQuote: true, // 따옴표 사용 시 작은 따옴표 사용
  trailingComma: "all", // 후행 콤마 방식 사용
  semi: true, // 세미콜론 사용 여부
  printWidth: 80, // 한 줄 최대 길이 지정
  tabWidth: 2, // 탭 너비 지정
};

/**
 * ******************** 프리티어 설정 적용 방법 ********************
 * 'prettier Code formatter' 설치 후 Ctrl + S 누르면 자동 적용
 * Ctrl + S 적용 안될시 터미털에서 'npm run format:fix'
 *
 * ********************** 프리티어 플러그인 설치 ***********************
 * VScode 좌측의 Extenstions에 'prettier Code formatter' 검색 후 Install
 *
 * ******************** 프리티어 플러그인 수동 설치 ********************
 * 설치가 되지 않을 시, 수동 설치 방법입니다.
 *
 * 카카오톡 단체 톡방에 공유된 vsix 파일 다운로드 후
 * Ctrl + Shift + P 누르고 install from vsix 검색
 * -> 다운로드 받은 vsix 파일 선택 -> 설치 완료
 *
 * ******************** 프리티어 수동 명령어 ********************
 *
 * [프리티어 설정 검사] 설정된 포맷팅에 맞게 파일이 작성되었는지 검사하는 명령어
 * npm run format
 *
 * [프리티어 설정 적용] 설정된 포맷팅을 모든 파일에 적용하는 명령어
 * npm run format:fix
 *
 * 필요 시, 위 명령어를 forontend 디렉토리 위치에서 터미널에 입력하면 됩니다.
 *
 * 아래와 같이 검사 결과가 나오면 [프리티어 설정 적용]
 * 명령어를 통해파일을 프리티어 설정에 맞게 변경하셔야 합니다.
 * [warn] Code style issues found in the above file. Forgot to run Prettier?
 *
 * 아래와 같이 검사 결과가 나오면 모든 파일이 포맷팅에 맞게 설정된 것입니다.
 * All matched files use Prettier code style!
 *
 * 프리티어 설정은 수정 가능하니 요구 사항 있을 시 말씀 부탁드립니다.
 */
