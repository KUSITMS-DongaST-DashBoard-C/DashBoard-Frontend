# [FE] README.md

담당 팀: 프론트
담당자: 신향아, 이안진
상태: Not started

# 💊 MEDIFLIX Admin Dashboard Frontend 💊

---

사용자 통계와 콘텐츠 통계의 다양한 시각화 자료를 이용하여
정량적인 데이터 분석을 통한 마케팅 인사이트를 얻을 수 있습니다.

![Untitled](./frontend/dashboard/src/assets/img/%5BFE%5D%20README%20IMG/Untitled.png)

![Untitled](./frontend/dashboard/src/assets/img/%5BFE%5D%20README%20IMG/Untitled%201.png)

## Description

---

> **어떤 문제점을 해결하고자 했나요?**

MEDIFLIX 는 사용자의 이용 정보를 활용한 마케팅 인사이트를 얻고자 했습니다.
그러나, 유저 트래픽을 확인할 수 있는 대시보드가 없었습니다.

현재 potal의 형태가 아닌 OTT 서비스를 제공하고 있어,
특히 세부 콘텐츠에 대한 데이터 분석이 중요한 상황입니다.

[MEDIFLIX](https://www.mediflix.co.kr/) 는 전국의 많은 의료진들이 이용하여 수도권과 지방의 의료 격차를 해소하고자 했습니다.

> **어떻게 해결했나요? 🧐**

이러한 점들을 종합적으로 미루어 봤을 때,
유저 통계와 콘텐츠 통계를 종합적으로 볼 수 있는 대시보드가 필요했습니다.

기간별 사용자 통계 지표 및 차트와 콘텐츠 이용 분석 기능을 추가했습니다.

또한, 지역별 이용자 수, 신규 가입자 수를 확인할 수 있도록, 지도 차트를 구현했습니다.

## **Development project timeline**

---

- **전체 프로젝트 기간**
  - 2023.03.04 - 2023.03.24
- **FE 개발 기간**
  - 2023.03.13 - 2023.03.24 (12일)

## Technologies Used

---

- `Frontend`
  ![Untitled](./frontend/dashboard/src/assets/img/%5BFE%5D%20README%20IMG/Untitled%202.png)
- `Recharts` `react-datepicker`

## Features

---

![Untitled](./frontend/dashboard/src/assets/img/%5BFE%5D%20README%20IMG/Untitled%203.png)

- DAU/WAU/MAU, 사용자 통계 지표

  - 차트를 통해 DAU, WAU, MAU와 일간, 주간, 월간 신규 가입자를 확인할 수 있습니다.
  - 오늘의 방문자 수, 페이지 뷰 수, 신규 가입자 수, 회원 이탈율을 확인할 수 있고,
    전날 대비 증감 비율을 확인할 수 있습니다.

- 지역별 트래픽  
  ![ezgif.com-crop.gif](./frontend/dashboard/src/assets/img/%5BFE%5D%20README%20IMG/ezgif.com-crop.gif)
  - 지역별 일일 방문자 및 신규 가입자 수를 지도 차트로 보여줍니다.
- 진료과별 유저 수  
  ![진료과별 유저 수.gif](./frontend/dashboard/src/assets/img/%5BFE%5D%20README%20IMG/)
  - 진료과별 유저 수 통계 파이차트
    - ‘내과, 정형외과, 내분비대사내과, 신경과, 그 외’로 분리하여 전체 가입 회원 중 해당 과의 회원 비율을 나타냄
    - 마우스 오버 시, 상세 정보 노출 ( 총 유저 수 )
- 업로드 예정 콘텐츠
  - 드롭다운 메뉴: 카테고리 지정
  - 카테고리 별로 썸네일 이미지, 제목, 전공, 업로드 예정 날짜 보여줌  
    ![업로드예정.gif](./frontend/dashboard/src/assets/img/%5BFE%5D%20README%20IMG/%EC%97%85%EB%A1%9C%EB%93%9C%20%EC%98%88%EC%A0%95.gif)
- 세부 콘텐츠 분석

  - 총 조회수: 필터링 후 동영상에 대한 총 조회수
  - 기간 설정 : 달력을 통해 범위 설정 (default: 2023-03-01~2023-04-10)
  - 드롭다운 메뉴 : 카테고리 지정

    - 지정된 카테고리 별 가져오는 정보

    ```
    ❒ ORIGINAL
    - thumbnailUrl
    - seriesName _episodeNum
    - uploadDate | major
    - commentNum / likeNum / reviewNum
    - viewsNum

    ❒ VOD
    - thumbnailUrl
    - title
    - uploadDate |  major
    - vodId
    - viewsNum

    ❒ Live
    - title
    - uploadDate
    - applicantNum
    - applicableNum
    - viewsNum

    ❒ LIFE
    - title
    - uploadDate_videoCategory
    - commentNum / likeNum
    - viewsNum
    ```

  - 정렬 설정 : 카테고리별로 정렬 기준 불러옴

    ```jsx
    const original = {
      "view/desc": "조회수 높은 순",
      "view/asc": "조회수 낮은 순",
      comment: "댓글 많은 순",
      like: "좋아요 많은 순",
      review: "리뷰 많은 순",
    };

    const vod = {
      "view/desc": "조회수 높은 순",
      "view/asc": "조회수 낮은 순",
    };
    const live = {
      "view/desc": "조회수 높은 순",
      "view/asc": "조회수 낮은 순",
      comment: "댓글 많은 순",
      applicant: "신청인원 많은 순",
    };

    export const life = {
      "view/desc": "조회수 높은 순",
      "view/asc": "조회수 낮은 순",
      comment: "댓글 많은 순",
      like: "좋아요 많은 순",
    };
    ```

    ![ezgif.com-video-to-gif (1).gif](<./frontend/dashboard/src/assets/img/%5BFE%5D%20README%20IMG/ezgif.com-video-to-gif_(1)%201.gif>)

- 콘텐츠 별 유입률
  - 파이 차트 마우스 오버시 각 콘텐츠 종류별 유입률 확인 가능
  - 콘텐츠 종류: original, vod, live, life  
    ![콘텐츠별 유저.gif](./frontend/dashboard/src/assets/img/%5BFE%5D%20README%20IMG/%EC%BD%98%ED%85%90%EC%B8%A0%EB%B3%84%20%EC%9C%A0%EC%9E%85%EB%A5%A0.gif)
- 사이드바
  - 사이드 바 메뉴
    - 대시보드
    - 회원 관리
    - 콘텐츠 관리
      - HOME 관리
      - LIVE 관리
      - ORIGINAL 관리
      - VOD 관리
      - LIFE 관리
    - 알림 관리
    - 댓글 관리
    - 고객 센터
    - 기본 설정  
      ![사이드바.gif](./frontend/dashboard/src/assets/img/%5BFE%5D%20README%20IMG/%EC%82%AC%EC%9D%B4%EB%93%9C%EB%B0%94.gif)
- 로그인 헤더  
  ![로그인 헤더.gif](./frontend/dashboard/src/assets/img/%5BFE%5D%20README%20IMG/%EB%A1%9C%EA%B7%B8%EC%9D%B8%ED%97%A4%EB%8D%94.gif)
  - 활동중인 관리자 : 로그인 중인 관리자를 확인할 수 있습니다.
    - 3명 이상의 관리자가 활동중일 때에는, 회색 동그라미에 나머지 관리자 수가 표시됩니다.
  - 메모를 열고 닫을 수 있습니다.
- 메모
  - 메모 생성하기  
    ![ezgif.com-video-to-gif (5).gif](<./frontend/dashboard/src/assets/img/%5BFE%5D%20README%20IMG/ezgif.com-video-to-gif_(5).gif>)
  - 메모 수정/삭제하기  
    ![ezgif.com-video-to-gif (4).gif](<./frontend/dashboard/src/assets/img/%5BFE%5D%20README%20IMG/ezgif.com-video-to-gif_(4).gif>)
    ![ezgif.com-video-to-gif (3).gif](<./frontend/dashboard/src/assets/img/%5BFE%5D%20README%20IMG/ezgif.com-video-to-gif_(3).gif>)
  - 댓글 작성/확인하기  
    ![ezgif.com-video-to-gif (2).gif](<./frontend/dashboard/src/assets/img/%5BFE%5D%20README%20IMG/ezgif.com-video-to-gif_(2).gif>)

## Team C

---

- `Frontend` 이안진, 신향아
- `Backend` 김민수, 장진우
- `기획` 문서현, 송예지
- `디자인` 김혜림

## Installation

---

1. 깃허브에서 프로젝트 저장소를 복제하세요.
2. `DashBoard/frontend/dashboard` 로 이동하세요.
3. 명령어 `yarn add`를 사용하여 필요한 종속성을 설치하십시오.
4. 서버를 시작하려면 `yarn start` 명령어를 사용하세요.
