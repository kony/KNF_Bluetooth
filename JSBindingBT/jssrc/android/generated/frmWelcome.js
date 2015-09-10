//Form JS File
function frmWelcome_Button044b3394e8a7147_onClick_seq0(eventobject) {
    frmHome.show();
};

function addWidgetsfrmWelcome() {
    var Label0a9b3c448f45c46 = new kony.ui.Label({
        "id": "Label0a9b3c448f45c46",
        "top": "17dp",
        "left": "145dp",
        "height": "100%",
        "centerX": "50%",
        "centerY": "50%",
        "zIndex": 1,
        "isVisible": true,
        "text": "Home",
        "skin": "sknLblTitle"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "textCopyable": false
    });
    var flxTitle = new kony.ui.FlexContainer({
        "id": "flxTitle",
        "top": "0dp",
        "left": "0dp",
        "width": "100%",
        "height": "10%",
        "zIndex": 1,
        "isVisible": true,
        "clipBounds": true,
        "Location": "[0,0]",
        "skin": "sknflxTitle",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});;
    flxTitle.setDefaultUnit(kony.flex.DP)
    flxTitle.add(
    Label0a9b3c448f45c46);
    var Label0f905ef88024743 = new kony.ui.Label({
        "id": "Label0f905ef88024743",
        "top": "99dp",
        "left": "108dp",
        "width": "80%",
        "height": "20%",
        "centerX": "50%",
        "centerY": "20%",
        "zIndex": 1,
        "isVisible": true,
        "text": "Application to showcase the following features of JS Binding (Bluetooth) :",
        "skin": "sknLblNormal"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 20
    }, {
        "textCopyable": false
    });
    var CopyLabel0d50fce2f7b8047 = new kony.ui.Label({
        "id": "CopyLabel0d50fce2f7b8047",
        "top": "30%",
        "left": "108dp",
        "width": "80%",
        "height": "7%",
        "centerX": "50.00%",
        "zIndex": 1,
        "isVisible": true,
        "text": "Get available devices",
        "skin": "sknLblNormal"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 7
    }, {
        "textCopyable": false
    });
    var CopyLabel0476bdbd589b549 = new kony.ui.Label({
        "id": "CopyLabel0476bdbd589b549",
        "top": "37%",
        "left": "108dp",
        "width": "80%",
        "height": "7%",
        "centerX": "50.00%",
        "zIndex": 1,
        "isVisible": true,
        "text": "Pair available devices",
        "skin": "sknLblNormal"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 7
    }, {
        "textCopyable": false
    });
    var CopyLabel0c8f96e2495fb47 = new kony.ui.Label({
        "id": "CopyLabel0c8f96e2495fb47",
        "top": "44%",
        "left": "108dp",
        "width": "80%",
        "height": "7%",
        "centerX": "50.00%",
        "zIndex": 1,
        "isVisible": true,
        "text": "Send files via Bluetooth",
        "skin": "sknLblNormal"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 7
    }, {
        "textCopyable": false
    });
    var Button044b3394e8a7147 = new kony.ui.Button({
        "id": "Button044b3394e8a7147",
        "top": "337dp",
        "left": "37dp",
        "width": "80%",
        "height": "8%",
        "centerX": "50%",
        "centerY": "60%",
        "zIndex": 1,
        "isVisible": true,
        "text": "Continue",
        "skin": "sknBtnNormal",
        "focusSkin": "sknBtnNormal",
        "onClick": frmWelcome_Button044b3394e8a7147_onClick_seq0
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 8
    }, {});
    frmWelcome.add(
    flxTitle, Label0f905ef88024743, CopyLabel0d50fce2f7b8047, CopyLabel0476bdbd589b549, CopyLabel0c8f96e2495fb47, Button044b3394e8a7147);
};

function frmWelcomeGlobals() {
    var MenuId = [];
    frmWelcome = new kony.ui.Form2({
        "id": "frmWelcome",
        "enableScrolling": true,
        "bounces": true,
        "allowHorizontalBounce": true,
        "allowVerticalBounce": true,
        "pagingEnabled": false,
        "needAppMenu": false,
        "title": null,
        "enabledForIdleTimeout": false,
        "skin": "sknFrmNormal",
        "layoutType": kony.flex.FREE_FORM,
        "addWidgets": addWidgetsfrmWelcome
    }, {
        "padding": [0, 0, 0, 0],
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "paddingInPixel": false
    }, {
        "retainScrollPosition": false,
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE,
        "titleBar": false,
        "footerOverlap": false,
        "headerOverlap": false,
        "inTransitionConfig": {
            "formAnimation": 0
        },
        "outTransitionConfig": {
            "formAnimation": 0
        },
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU
    });
    frmWelcome.setDefaultUnit(kony.flex.PERCENTAGE);
};