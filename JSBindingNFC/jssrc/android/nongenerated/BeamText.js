    NdefMessage = java.import('android.nfc.NdefMessage');
    NdefRecord = java.import('android.nfc.NdefRecord');
    KonyMain = java.import('com.konylabs.android.KonyMain');
    context1 = KonyMain.getActivityContext();
    Intent = java.import('android.content.Intent');
    Context = java.import('android.content.Context');
    NfcAdapter = java.import('android.nfc.NfcAdapter');
    Ndef = java.import('android.nfc.tech.Ndef');
    Tag = java.import('android.nfc.Tag');
    Uri = java.import('android.net.Uri');
    File = java.import('java.io.File');
    var newclass1 = java.newClass('newclass1', 'java.lang.Object', ['android.nfc.NfcAdapter$OnNdefPushCompleteCallback'], {
        onNdefPushComplete: function(test) {
            kony.print("NDEF Push Completed  " + test)
        }
    });
    var newclass2 = java.newClass('newclass2', 'java.lang.Object', ['android.nfc.NfcAdapter$CreateNdefMessageCallback'], {
        createNdefMessage: function(event) {
            kony.print("NDEF Message  Completed  " + event)
            adapter = NfcAdapter.getDefaultAdapter(context1);
            var mes1 = createndefmessage();
            adapter.enableForegroundNdefPush(context1, mes1);
            return mes1;
        }
    });

    function ValidateNFCText() {
        var mes1 = createndefmessage();
        adapter.enableForegroundNdefPush(context1, mes1);
    }

    function createndefmessage() {
        var m1 = NdefRecord.createTextRecord("en", "First sample NDEF text record");
        var m2 = NdefRecord.createTextRecord("en", "Second sample NDEF text record");
        var jsNdefArray = [];
        jsNdefArray[0] = m1;
        jsNdefArray[1] = m2;
        var data = java.newArray('android.nfc.NdefRecord', jsNdefArray);
        mNdefMessage = new NdefMessage(data);
        return mNdefMessage;
    }

    function createndefuri() {
        var transferFile = "lta.pdf";
        var pathoffile = "/storage/emulated/0/Download/"
        var externalFile = new File(pathoffile, transferFile);
        externalFile.setReadable(true, false);
        var external = Uri.fromFile(externalFile);
        kony.print("File url is" + external);
        var uriArray = [];
        uriArray[0] = external;
        var uridata = java.newArray('android.net.Uri', uriArray);
        return uridata
    }

    function ValidateNFCUri() {
        var mes1 = createndefuri();
        adapter.setBeamPushUris(mes1, context1);
    }