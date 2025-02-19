//
//    .swift
//  ReactNativeBridge
//
//  Created by Nayan Vekariya on 18/02/25.
//

import Foundation
import React

@objc(NativeModule)
class NativeModule: NSObject {

  @objc static func requiresMainQueueSetup() -> Bool {
      return true
  }

  @objc func logMessage(_ message: String) {
    NSLog("%@", message)
  }

  @objc func add(_ a: Int, b: Int, resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {
      if a >= 0 && b >= 0 {
          resolve(a + b)
      } else {
          let error = NSError(domain: "AddError", code: 400, userInfo: [NSLocalizedDescriptionKey: "Both numbers must be non-negative"])
          reject("add_error", "Invalid input: a and b must be non-negative", error)
      }
  }

  @objc func subtract(_ a: Int, b: Int, resolve: RCTPromiseResolveBlock, reject: RCTPromiseRejectBlock) {
    if a >= b {
      resolve(a - b)
    } else {
      let error = NSError(domain: "SubtractError", code: 200, userInfo: nil)
      reject("subtract_error", "a is less than b", error)
    }
  }
}

