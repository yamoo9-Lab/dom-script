// selector()
// createEl()
// createText()
// append()

// 문서가 로드되면....
// 화면에 반 투명한 어두운 레이어를 깔아준다.
var body = selector('body');
var dim_layer = createEl('div');

// dim 식별자 속성을 추가한다.
dim_layer.setAttribute('id', 'dim');

css(dim_layer, 'position: fixed; left: 0; top: 0; width: 100%; height: 100vh; background-color: rgba(0,0,0,0.6);')

// dim_layer.style.cssText = 'position: fixed; left: 0; top: 0; width: 100%; height: 100vh; background-color: rgba(0,0,0,0.6);';

// <body> 요소의 마지막 자식으로 dim_layer를 추가한다.
append(body, dim_layer);