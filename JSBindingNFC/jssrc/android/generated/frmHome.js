//Form JS File
function frmHome_frmHome_postshow_seq0(eventobject) {
    adapter = NfcAdapter.getDefaultAdapter(context1);
    if (adapter == null) {
        alert("NFC Not Supported in this Device");
    } else {
        if (!adapter.isEnabled()) {
            alert("Please enable NFC");
            var intent = new Intent(Settings.ACTION_NFC_SETTINGS);
            context1.startActivity(intent);
        }
    }
};

function frmHome_btnNFCText_onClick_seq0(eventobject) {
    ValidateNFCText.call(this);
};

function frmHome_btnNFCURL_onClick_seq0(eventobject) {
    ValidateNFCUri.call(this);
};

function frmHome_btnNFCTag_onClick_seq0(eventobject) {
    OnCreated.call(this);
};

function addWidgetsfrmHome() {
    var lblTitle = new kony.ui.Label({
        "id": "lblTitle",
        "top": "0dp",
        "left": "0dp",
        "width": "100%",
        "height": "8%",
        "zIndex": 1,
        "isVisible": true,
        "text": "Kony JS Binding NFC",
        "skin": "sknTitle"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 8
    }, {
        "textCopyable": false
    });
    var btnNFCText = new kony.ui.Button({
        "id": "btnNFCText",
        "top": "14%",
        "left": "53dp",
        "width": "80%",
        "height": "8%",
        "centerX": "50%",
        "zIndex": 1,
        "isVisible": true,
        "text": "Broadcast NFC Text",
        "skin": "sknBtnNormal",
        "focusSkin": "sknBtnNormal",
        "onClick": frmHome_btnNFCText_onClick_seq0
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 8
    }, {});
    var btnNFCURL = new kony.ui.Button({
        "id": "btnNFCURL",
        "top": "28%",
        "left": "53dp",
        "width": "80%",
        "height": "8%",
        "centerX": "50%",
        "zIndex": 1,
        "isVisible": true,
        "text": "Broadcast NFC URL",
        "skin": "sknBtnNormal",
        "focusSkin": "sknBtnNormal",
        "onClick": frmHome_btnNFCURL_onClick_seq0
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 8
    }, {});
    var btnNFCTag = new kony.ui.Button({
        "id": "btnNFCTag",
        "top": "42%",
        "left": "53dp",
        "width": "80%",
        "height": "8%",
        "centerX": "50%",
        "zIndex": 1,
        "isVisible": true,
        "text": "Read NFC Tag",
        "skin": "sknBtnNormal",
        "focusSkin": "sknBtnNormal",
        "onClick": frmHome_btnNFCTag_onClick_seq0
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 8
    }, {});
    var lblTagData = new kony.ui.Label({
        "id": "lblTagData",
        "top": "56%",
        "left": "91dp",
        "width": "80%",
        "centerX": "50%",
        "zIndex": 1,
        "isVisible": true,
        "text": null,
        "skin": "sknNormal"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {
        "textCopyable": false
    });
    frmHome.add(
    lblTitle, btnNFCText, btnNFCURL, btnNFCTag, lblTagData);
};

function frmHomeGlobals() {
    var MenuId = [];
    frmHome = new kony.ui.Form2({
        "id": "frmHome",
        "enableScrolling": true,
        "bounces": true,
        "allowHorizontalBounce": true,
        "allowVerticalBounce": true,
        "pagingEnabled": false,
        "needAppMenu": false,
        "title": null,
        "enabledForIdleTimeout": false,
        "skin": "CopyslForm02f1e1d08011b41",
        "postShow": frmHome_frmHome_postshow_seq0,
        "layoutType": kony.flex.FREE_FORM,
        "addWidgets": addWidgetsfrmHome
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
    frmHome.setDefaultUnit(kony.flex.DP);
};