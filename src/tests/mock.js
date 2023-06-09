const reservations = [
  {
    'id': '53005895',
    'status': 'seated',
    'timeRegistered': '2020-10-10 18:02:20',
    'timeReserved': '2020-11-02 11:00:00',
    'customer': {
      'id': '200512254359',
      'name': '알베르트 아인슈타인',
      'level': 'VIP',
      'timeVisitedLast': '2020-09-11 18:32:20',
      'adult': 2,
      'child': 1,
      'memo': '독일 태생의 이론물리학자로서 역사상 가장 위대한 물리학자 중의 한명으로 널리 인정되고 있다. 상대성 이론을 개발한 것으로 가장 잘 알려져 있지만 양자역학 이론의 발전에도 중요한 공헌을 했다.',
      'request': '-'
    },
    'tables': [
      {
        'id': 0,
        'floor': 1,
        'name': '1번 테이블',
        'min': 1,
        'max': 4
      }
    ],
    'menus': [
      {
        'id': '02110701',
        'name': '봉골라 스파게티',
        'qty': 1
      },
      {
        'id': '02090105',
        'name': '파이브 치즈 피자',
        'qty': 1
      }
    ]
  },
  {
    'id': '64500096',
    'status': 'seated',
    'timeRegistered': '2020-10-02 13:02:20',
    'timeReserved': '2020-11-02 11:30:00',
    'customer': {
      'id': '202012250922',
      'name': '아이작 뉴턴',
      'level': '단골',
      'timeVisitedLast': '2020-09-03 17:02:20',
      'adult': 6,
      'child': 0,
      'memo': '1687년 발간된 자연철학의 수학적 원리(프린키피아, \'Principia\')는 고전역학과 만유인력의 기본 바탕을 제시하며, 과학사에서 영향력 있는 저서 중의 하나로 꼽힌다.\n 이 저서에서 뉴턴은 다음 3세기 동안 우주의 과학적 관점에서 절대적이었던 만유인력과 3가지의 뉴턴 운동 법칙을 저술했다.',
      'request': '사과나무'
    },
    'tables': [
      {
        'id': 3,
        'floor': 1,
        'name': '1번 테이블',
        'min': 1,
        'max': 3
      },
      {
        'id': 3,
        'floor': 2,
        'name': '2번 테이블',
        'min': 1,
        'max': 3
      },
      {
        'id': 3,
        'floor': 3,
        'name': '3번 테이블',
        'min': 1,
        'max': 2
      }
    ],
    'menus': [
      {
        'id': '02090209',
        'name': 'Grilled 스테이크',
        'qty': 1
      },
      {
        'id': '02110701',
        'name': '문어와 마늘종 스파게티니',
        'qty': 1
      },
      {
        'id': '02110108',
        'name': '프로슈토와 루꼴라 샐러드',
        'qty': 2
      },
      {
        'id': '02110105',
        'name': '흰살생선과 안초비 오일 파스타',
        'qty': 1
      },
      {
        'id': '02110104',
        'name': '구운문어와 라디치오',
        'qty': 1
      },
      {
        'id': '09010300',
        'name': '돔 페리뇽 레이디 가가 리미티드 에디션 2010',
        'qty': 1
      },
      {
        'id': '09090100',
        'name': '콩스가르드 샤도네이',
        'qty': 1
      }
    ]
  },
  {
    'id': '60222897',
    'status': 'seated',
    'timeRegistered': '2020-10-01 22:12:30',
    'timeReserved': '2020-11-02 12:30:00',
    'customer': {
      'id': '201601074459',
      'name': 'Albert Abraham Michelson',
      'level': '',
      'timeVisitedLast': '2020-08-01 12:02:10',
      'adult': 2,
      'child': 1,
      'memo': '폴란드에서 유대인 집안에서 태어나 2세 되던 해 부모와 함께 미국으로 이주해 온다.\n 1869년 애너폴리스의 해군 사관학교(United States Naval Academy)에 입학하여, 1873년 졸업하여 해군으로 복무하며, 해병학교의 물리학 강사가 된다.\n 그 이후 유럽에서 2년간 공부하여 광속측정에 관심을 갖게 된다. 1881년 해군을 그만두고 유럽에서 유학하였다. 클리블랜드 대학 물리학 교수를 거쳐, 시카고 대학 교수를 지냈다.',
      'request': '빛과 소금'
    },
    'tables': [
      {
        'id': 7,
        'floor': 1,
        'name': '7번 테이블',
        'min': 1,
        'max': 4
      }
    ],
    'menus': [
      {
        'id': '02099999',
        'name': '프리미엄 사이드',
        'qty': 1
      },
      {
        'id': '02090404',
        'name': '클래식 시저 샐러드',
        'qty': 1
      }
    ]
  },
  {
    'id': '00888898',
    'status': 'done',
    'timeRegistered': '2020-11-02 09:56:09',
    'timeReserved': '2020-11-02 12:30:00',
    'customer': {
      'id': '199904070059',
      'name': '아무개1',
      'level': '블랙리스트',
      'timeVisitedLast': '2020-11-02 10:23:11',
      'adult': 3,
      'child': 0,
      'memo': '!@#$%^&*(!@#$!$#%%$#^#&',
      'request': ''
    },
    'tables': [
      {
        'id': 32,
        'floor': 3,
        'name': '2번 테이블',
        'min': 1,
        'max': 4
      }
    ],
    'menus': [
      {
        'id': '02090105',
        'name': '쉬림프 피자',
        'qty': 1
      }
    ]
  },
  {
    'id': '63888899',
    'status': 'reserved',
    'timeRegistered': '2020-10-02 22:56:09',
    'timeReserved': '2020-11-02 13:00:00',
    'customer': {
      'id': '201701080059',
      'name': '갈릴레오 갈릴레이',
      'level': '',
      'timeVisitedLast': '2020-05-04 19:06:00',
      'adult': 2,
      'child': 0,
      'memo': '',
      'request': ''
    },
    'tables': [
      {
        'id': 27,
        'floor': 2,
        'name': '7번 테이블',
        'min': 1,
        'max': 4
      }
    ],
    'menus': [
      {
        'id': '02110104',
        'name': '구운문어와 라디치오',
        'qty': 1
      },
      {
        'id': '02110105',
        'name': '흰살생선과 안초비 오일 파스타',
        'qty': 1
      }
    ]
  },
  {
    'id': '64399933',
    'status': 'reserved',
    'timeRegistered': '2020-10-09 16:02:20',
    'timeReserved': '2020-11-02 13:00:00',
    'customer': {
      'id': '201905050190',
      'name': '에르빈 루돌프 요제프 알렉산더 슈뢰딩거',
      'level': '지인',
      'timeVisitedLast': '2020-10-01 19:12:20',
      'adult': 3,
      'child': 0,
      'memo': '',
      'request': ''
    },
    'tables': [
      {
        'id': 5,
        'floor': 1,
        'name': '5번 테이블',
        'min': 1,
        'max': 6
      }
    ],
    'menus': [
      {
        'id': '02090105',
        'name': '파이브 치즈 피자',
        'qty': 1
      },
      {
        'id': '02110104',
        'name': '구운문어와 라디치오',
        'qty': 1
      },
      {
        'id': '09010300',
        'name': '돔 페리뇽 레이디 가가 리미티드 에디션 2010',
        'qty': 1
      }
    ]
  },
  {
    'id': '59474900',
    'status': 'reserved',
    'timeRegistered': '2020-10-01 16:32:20',
    'timeReserved': '2020-11-02 13:30:00',
    'customer': {
      'id': '201103130059',
      'name': '마리 퀴리',
      'level': '지인',
      'timeVisitedLast': '2020-09-30 18:02:20',
      'adult': 3,
      'child': 0,
      'memo': '마리아 스크워도프스카 퀴리(폴란드어: Maria Skłodowska-Curie, 1867년 11월 7일 ~ 1934년 7월 4일)는 폴란드 출신의 프랑스 과학자이다. 본명은 마리아 살로메아 스크워도프스카(폴란드어: Maria Salomea Skłodowska)이고, 프랑스식 이름은 마리 퀴리(프랑스어: Marie Curie)이다.',
      'request': '방사능, 노벨상, 물리학상, 화학상'
    },
    'tables': [
      {
        'id': 5,
        'floor': 1,
        'name': '5번 테이블',
        'min': 1,
        'max': 3
      },
      {
        'id': 5,
        'floor': 1,
        'name': '6번 테이블',
        'min': 1,
        'max': 3
      }
    ],
    'menus': [
      {
        'id': '02090105',
        'name': '씨푸드 퐁듀',
        'qty': 1
      },
      {
        'id': '02110104',
        'name': '아마트리치아나',
        'qty': 1
      },
      {
        'id': '09010300',
        'name': '찰스 하이직, 브뤼 리저브',
        'qty': 1
      }
    ]
  }
];

export default { reservations, reservation: reservations[0] };