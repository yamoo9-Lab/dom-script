// 1. 문서 로딩이 되면 딤을 생성한다.
createDim('dim');

// 2. 카운트다운 요소를 화면 가운데 추가한다.
var body = selector('body');
var countDown = createEl('div');
var count = createText(5);

countDown.setAttribute('id', 'countdown');

append(countDown, count);

append(body, countDown);