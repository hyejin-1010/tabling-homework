const reservation = {
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
  'tables':[{ 'id': 0, 'floor': 1, 'name': '1번 테이블', 'min': 1, 'max': 4 }],
  'menus':[
    { 'id': '02110701', 'name': '봉골라 스파게티', 'qty':1 },
    { 'id': '02090105', 'name': '파이브 치즈 피자', 'qty':1 }
  ]
};

export default { reservation };