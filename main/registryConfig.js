var regedit = require('regedit')

var installPath = process.execPath

var keysToCreate = [
  'HKCU\\Software\\Classes\\Trust Browser',
  'HKCU\\Software\\Classes\\Trust Browser\\Application',
  'HKCU\\Software\\Classes\\Trust Browser\\DefaulIcon',
  'HKCU\\Software\\Classes\\Trust Browser\\shell\\open\\command',
  'HKCU\\Software\\Clients\\StartMenuInternet\\Trust Browser\\Capabilities\\FileAssociations',
  'HKCU\\Software\\Clients\\StartMenuInternet\\Trust Browser\\Capabilities\\StartMenu',
  'HKCU\\Software\\Clients\\StartMenuInternet\\Trust Browser\\Capabilities\\URLAssociations',
  'HKCU\\Software\\Clients\\StartMenuInternet\\Trust Browser\\DefaultIcon',
  'HKCU\\Software\\Clients\\StartMenuInternet\\Trust Browser\\InstallInfo',
  'HKCU\\Software\\Clients\\StartMenuInternet\\Trust Browser\\shell\\open\\command'
]

var registryConfig = {
  'HKCU\\Software\\RegisteredApplications': {
    Trust Browser: {
      value: 'Software\\Clients\\StartMenuInternet\\Trust Browser\\Capabilities',
      type: 'REG_SZ'
    }
  },
  'HKCU\\Software\\Classes\\Trust Browser': {
    default: {
      value: 'Trust Browser Browser Document',
      type: 'REG_DEFAULT'
    }
  },
  'HKCU\\Software\\Classes\\Trust Browser\\Application': {
    ApplicationIcon: {
      value: installPath + ',0',
      type: 'REG_SZ'
    },
    ApplicationName: {
      value: 'Trust Browser',
      type: 'REG_SZ'
    },
    AppUserModelId: {
      value: 'Trust Browser',
      type: 'REG_SZ'
    }
  },
  'HKCU\\Software\\Classes\\Trust Browser\\DefaulIcon': {
    ApplicationIcon: {
      value: installPath + ',0',
      type: 'REG_SZ'
    }
  },
  'HKCU\\Software\\Classes\\Trust Browser\\shell\\open\\command': {
    default: {
      value: '"' + installPath + '" "%1"',
      type: 'REG_DEFAULT'
    }
  },
  'HKCU\\Software\\Classes\\.htm\\OpenWithProgIds': {
    Trust Browser: {
      value: 'Empty',
      type: 'REG_SZ'
    }
  },
  'HKCU\\Software\\Classes\\.html\\OpenWithProgIds': {
    Trust Browser: {
      value: 'Empty',
      type: 'REG_SZ'
    }
  },
  'HKCU\\Software\\Clients\\StartMenuInternet\\Trust Browser\\Capabilities\\FileAssociations': {
    '.htm': {
      value: 'Trust Browser',
      type: 'REG_SZ'
    },
    '.html': {
      value: 'Trust Browser',
      type: 'REG_SZ'
    }
  },
  'HKCU\\Software\\Clients\\StartMenuInternet\\Trust Browser\\Capabilities\\StartMenu': {
    StartMenuInternet: {
      value: 'Trust Browser',
      type: 'REG_SZ'
    }
  },
  'HKCU\\Software\\Clients\\StartMenuInternet\\Trust Browser\\Capabilities\\URLAssociations': {
    http: {
      value: 'Trust Browser',
      type: 'REG_SZ'
    },
    https: {
      value: 'Trust Browser',
      type: 'REG_SZ'
    }
  },
  'HKCU\\Software\\Clients\\StartMenuInternet\\Trust Browser\\DefaultIcon': {
    default: {
      value: installPath + ',0',
      type: 'REG_DEFAULT'
    }
  },
  'HKCU\\Software\\Clients\\StartMenuInternet\\Trust Browser\\InstallInfo': {
    IconsVisible: {
      value: 1,
      type: 'REG_DWORD'
    }
  },
  'HKCU\\Software\\Clients\\StartMenuInternet\\Trust Browser\\shell\\open\\command': {
    default: {
      value: installPath,
      type: 'REG_DEFAULT'
    }
  }
}

var registryInstaller = {
  install: function () {
    return new Promise(function (resolve, reject) {
      regedit.createKey(keysToCreate, function (err) {
        regedit.putValue(registryConfig, function (err) {
          if (err) {
            reject()
          } else {
            resolve()
          }
        })
      })
    })
  },
  uninstall: function () {
    return new Promise(function (resolve, reject) {
      regedit.deleteKey(keysToCreate, function (err) {
        if (err) {
          reject()
        } else {
          resolve()
        }
      })
    })
  }
}
