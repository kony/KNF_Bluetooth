    BluetoothAdapter = java.import('android.bluetooth.BluetoothAdapter');
    KonyMain = java.import('com.konylabs.android.KonyMain');
    context1	=	KonyMain.getActivityContext();
    BluetoothManager = java.import('android.bluetooth.BluetoothManager');
    Intent= java.import('android.content.Intent');
    PackageManager = java.import('android.content.pm.PackageManager');
    Context	=java.import('android.content.Context');
    IntentFilter = java.import('android.content.IntentFilter');
    BluetoothDevice=java.import('android.bluetooth.BluetoothDevice');
	BluetoothGatt=java.import('android.bluetooth.BluetoothGatt');
	BluetoothGattCallback = java.import('android.bluetooth.BluetoothGattCallback');
	BluetoothGattCharacteristic=java.import('android.bluetooth.BluetoothGattCharacteristic');
	BluetoothGattDescriptor=java.import('android.bluetooth.BluetoothGattDescriptor');
	BluetoothGattService=java.import('android.bluetooth.BluetoothGattService');
    BluetoothProfile=java.import('android.bluetooth.BluetoothProfile');
    URI=java.import('android.net.Uri');
	UUID=java.import('java.util.UUID');
	File =java.import('java.io.File');
    ba = BluetoothAdapter.getDefaultAdapter();
    bscanner=ba.getBluetoothLeScanner();
    var i=0;
    var newSearchDevices=[];
    ResolveInfo =java.import('android.content.pm.ResolveInfo');
    


// Validates bluetooth support and adapter enabled/disabled
function getBlutoothSupport() {
   
   // Validating Whether Device Supports Bluetooth or Not
   if (!context1.getPackageManager().hasSystemFeature(PackageManager.FEATURE_BLUETOOTH_LE)) 
   {
    alert("BluetoothLE Is Not Supported on this Device..Good Bye..!!")
   }
   else{
   frmHome.lblSupport.text="Bluetooth is supported";
   // Initializes Bluetooth adapter.
    var bm = context1.getSystemService(Context.BLUETOOTH_SERVICE);
    var ba = bm.getAdapter();
   // Validating Bluetooth is enabled or not.Enable if not enable
   if (ba == null || !ba.isEnabled()) {
   var enableBTIntent = new Intent(BluetoothAdapter.ACTION_REQUEST_ENABLE);
   context1.startActivityForResult(enableBTIntent, 2001); 
}
frmHome.lblOnOff.text="Bluetooth is on";

}
}

// Scans for the bluetooth available devices
function startscanscan()
{
	frmScan.Segment01f18a13727f042.removeAll();
	while(newSearchDevices.length > 0) {
		newSearchDevices.pop();
	}
	getBlutoothSupport();
	var MyListener2 = java.newClass('MyListener2','android.bluetooth.le.ScanCallback',[],{
					onScanFailed: function(error) 
											{
												kony.print("Error Results   "+error);
											}
												});
var Hello1 = java.newClass('Hello', 'android.content.BroadcastReceiver', [], {
onReceive: function(ctxt, inten) 
{
var receivedDevice = inten.getParcelableExtra(BluetoothDevice.EXTRA_DEVICE);
frmScan.Segment01f18a13727f042.addAll([{
            Label0ffb0e67318474c: receivedDevice.getName()
        }]); 
       newSearchDevices.push(receivedDevice); 
        }
    });
var temp=new MyListener2();
if (ba.isDiscovering()) 
ba.cancelDiscovery();
ba.startDiscovery();
bscanner.startScan(temp);
if(i==0)
    	context1.registerReceiver(new Hello1(), new IntentFilter(BluetoothDevice.ACTION_FOUND));
    i=1;
}

// For bonding the intended device
function BondDevice()
{
var Hello2 = java.newClass('Hello2', 'android.content.BroadcastReceiver', [], {
onReceive: function(ctxt, inten) 
{
var action = inten.getAction();
if (BluetoothDevice.ACTION_BOND_STATE_CHANGED == action) {
    var state = inten.getIntExtra(BluetoothDevice.EXTRA_BOND_STATE, BluetoothDevice.ERROR);
    var prevState = inten.getIntExtra(BluetoothDevice.EXTRA_PREVIOUS_BOND_STATE, BluetoothDevice.ERROR);
    if(state == BluetoothDevice.BOND_BONDED && prevState == BluetoothDevice.BOND_BONDING) {
    	kony.print("Device is Paired");
        	} else if (state == BluetoothDevice.BOND_NONE && prevState == BluetoothDevice.BOND_BONDED){
                     kony.print("Device is UnPaired");
}}}});

var searchDeviceSelected = newSearchDevices[Math.round(frmScan.Segment01f18a13727f042.selectedIndex[1])-1];
alert(searchDeviceSelected.getName());
if (searchDeviceSelected.getBondState() != BluetoothDevice.BOND_BONDED)
searchDeviceSelected.createBond();
context1.registerReceiver(new Hello2(), new IntentFilter(BluetoothDevice.ACTION_BOND_STATE_CHANGED));
}


// Returns the bonded devices in Segment
function getBondedDevices() {  
	frmPairedDev.Segment01f18a13727f042.removeAll();
    devices = ba.getBondedDevices().toArray();
    for (j = 0; j < devices.length; j++) { 	
         frmPairedDev.Segment01f18a13727f042.addAll([{
            Label0ffb0e67318474c: devices[j].getName()
        }]);
    }
}


// For canceling the discovery
function stopscan()
{
ba.cancelDiscovery();
}


//For getting bluetooth adapter status
function getbluetoothstatus()
{
	if(ba.isDiscovering()==true){
		alert("Scanning for devices");
	}
	else{
		alert("Not scanning for devices");	
	}
}
// for sending file to intended devices
function sendfile()
{
var appsList=[];
var intent = new Intent();
intent.setAction(Intent.ACTION_SEND);
intent.setType("text/plain");
var f=new File("/storage/emulated/0/Download/lta.pdf");
intent.putExtra(Intent.EXTRA_STREAM, URI.fromFile(f));
context1.startActivity(intent);
var pm = context1.getPackageManager();
appsList = pm.queryIntentActivities( intent, 0);
if(appsList.length > 0) {
var packagename=ResolveInfo.activityInfo.packageName;
var classname=ResolveInfo.activityInfo.name;
intent.setClassName("com.android.bluetooth", "com.android.bluetooth");
context1.startActivity(intent);


}
}
