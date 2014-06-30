var sizex = 3, movex = 3;
var sizey = 2, movey = 4;

var hyper = ":ctrl;shift;alt;cmd";

function getWidth() { return ScreenRect().width / sizex; }
function getHeight() { return ScreenRect().height / sizey; }
function getAnchorX() { return ScreenRect().width / movex; }
function getAnchorY() { return ScreenRect().height / movey; }

function ScreenRect() { return S.screen().visibleRect(); }
function WindowRect() { return S.window().rect(); }

function getCurrentX() { return Math.round((WindowRect().x - ScreenRect().x) / getAnchorX()) }

// Horizontal Movement

S.bind("right" + hyper, function (w) {
	var x = getCurrentX();

	if (x === 2) {
		w.doOperation("throw", { screen: "right" });
		w.doOperation("push", { direction: "left" });
	} else {
		w.move({
			x: Math.max(ScreenRect().x, ScreenRect().x + (x + 1) * getAnchorX()),
			y: "windowTopLeftY"
		});
	}
});

S.bind("left" + hyper, function (w) {
	var x = getCurrentX();

	if (x === 0) {
		w.doOperation("throw", { screen: "left" });
		w.doOperation("push", { direction: "right" });
	} else {
		w.move({
			x: Math.max(ScreenRect().x, ScreenRect().x + (x - 1) * getAnchorX()),
			y: "windowTopLeftY"
		});
	}
});

// Horizontal Sizing

S.bind("1" + hyper, function (w) {
	w.resize({
		width: getWidth(),
		height: "windowSizeY"
	});
});

S.bind("2" + hyper, function (w) {
	w.resize({
		width: getWidth() * 2,
		height: "windowSizeY"
	});
});

S.bind("3" + hyper, function (w) {
	w.resize({
		width: getWidth() * 3,
		height: "windowSizeY"
	});
});

S.bind("4" + hyper, function (w) {
	w.resize({
		width: getWidth() * 3 / 4,
		height: "windowSizeY"
	});
});

S.bind("5" + hyper, function (w) {
	w.resize({
		width: getWidth() * 3 / 5,
		height: "windowSizeY"
	});
});

// Vertical Movement

S.bind("up" + hyper, function (w) {
	if (WindowRect().y === ScreenRect().y) {
		if (WindowRect().height >= (getHeight() + ScreenRect().height) / 2) {
			w.resize({ width: "windowSizeX", height: getHeight() });
		} else {
			w.resize({ width: "windowSizeX", height: ScreenRect().height });
		}
	} else {
		w.move({ x: "windowTopLeftX", y: ScreenRect().y });
	}
});

S.bind("down" + hyper, function (w) {
	if (WindowRect().height === ScreenRect().height) {
		w.resize({ width: "windowSizeX", height: getHeight() });
	} else if (WindowRect().y === ScreenRect().y + ScreenRect().height - getHeight()) {
		w.resize({ width: "windowSizeX", height: ScreenRect().height });
		w.move({ x: "windowTopLeftX", y: ScreenRect().y });
	} else {
		w.move({ x: "windowTopLeftX", y: ScreenRect().y + ScreenRect().height - getHeight() });
	}
});

// Macros

S.bind("pageUp" + hyper, function (w) {	
	w.resize({
		width: ScreenRect().width,
		height: ScreenRect().height
	});
});

S.bind("pageDown" + hyper, function (w) {	
	w.resize({
		width: getWidth(),
		height: getHeight()
	});
});
