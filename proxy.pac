function FindProxyForURL(url, host) {
    
    console.log myIpAddress();
    
    if (isInNet(myIpAddress(), "192.0.0.0", "255.255.255.0") ||
        isInNet(myIpAddress(), "10.0.0.0", "255.255.255.0")) {
        return "DIRECT";
    } else {
        return "PROXY 192.0.0.153:8080";
    }
}
