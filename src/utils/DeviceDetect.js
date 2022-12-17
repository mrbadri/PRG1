export const getDeviceName = () => {
    // TODO: IOS DEVICE NAME
    let deviceName = '';
    const isMobile = {
      android: function () {
        return navigator && navigator.userAgent && navigator.userAgent.match(/Android/i);
      },
      datalogic: function () {
        return navigator && navigator.userAgent && navigator.userAgent.match(/DL-AXIS/i);
      },
      bluebird: function () {
        return navigator && navigator.userAgent && navigator.userAgent.match(/EF500/i);
      },
      honeywell: function () {
        return navigator && navigator.userAgent && navigator.userAgent.match(/CT50/i);
      },
      zebra: function () {
        return navigator && navigator.userAgent && navigator.userAgent.match(/TC70|TC55/i);
      },
      blackberry: function () {
        return navigator && navigator.userAgent && navigator.userAgent.match(/BlackBerry/i);
      },
      ios: function () {
        return navigator && navigator.userAgent && navigator.userAgent.match(/iPhone|iPad|iPod/i);
      },
      windows: function () {
        return navigator && navigator.userAgent && navigator.userAgent.match(/IEMobile/i);
      },
      any: function () {
        return (
          isMobile.datalogic() ||
          isMobile.bluebird() ||
          isMobile.honeywell() ||
          isMobile.zebra() ||
          isMobile.blackberry() ||
          isMobile.android() ||
          isMobile.ios() ||
          isMobile.windows()
        );
      },
    };
  
    if (isMobile.datalogic()) deviceName = 'Web Datalogic';
    else if (isMobile.bluebird()) deviceName = 'Web Bluebird';
    else if (isMobile.honeywell()) deviceName = 'Web Honeywell';
    else if (isMobile.zebra()) deviceName = 'Web Zebra';
    else if (isMobile.blackberry()) deviceName = 'Web BlackBerry';
    else if (isMobile.ios()) deviceName = 'Web iOS';
    else if (deviceName === '' && isMobile.android()) deviceName = 'Web Android';
    else if (deviceName === '' && isMobile.windows()) deviceName = 'Web Windows';
  
    if (deviceName === '') {
      if (navigator.userAgent.indexOf('Windows NT 10.0') !== -1) deviceName = 'Web Windows 10';
      if (navigator.userAgent.indexOf('Windows NT 6.3') !== -1) deviceName = 'Web Windows 8.1';
      if (navigator.userAgent.indexOf('Windows NT 6.2') !== -1) deviceName = 'Web Windows 8';
      if (navigator.userAgent.indexOf('Windows NT 6.1') !== -1) deviceName = 'Web Windows 7';
      if (navigator.userAgent.indexOf('Windows NT 6.0') !== -1) deviceName = 'Web Windows Vista';
      if (navigator.userAgent.indexOf('Windows NT 5.1') !== -1) deviceName = 'Web Windows XP';
      if (navigator.userAgent.indexOf('Windows NT 5.0') !== -1) deviceName = 'Web Windows 2000';
      if (navigator.userAgent.indexOf('Mac') !== -1) deviceName = 'Web Mac/iOS';
      if (navigator.userAgent.indexOf('X11') !== -1) deviceName = 'Web UNIX';
      if (navigator.userAgent.indexOf('Linux') !== -1) deviceName = 'Web Linux';
    }
  
    // if (deviceName !== "") {
    //   console.log(`Devices information deviceName = ${deviceName}`);
    //   console.log(`Devices information any = ${isMobile.any()}`);
    //   console.log(`navigator.userAgent = ${navigator.userAgent}`);
    // }
  
    return deviceName || 'Unknown Browser';
  };
  