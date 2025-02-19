//
//  NativeModuleBridge.m
//  ReactNativeBridge
//
//  Created by Nayan Vekariya on 18/02/25.
//

#import <React/RCTBridgeModule.h>

// Interface declaration for the NativeModule to expose it to React Native
@interface RCT_EXTERN_MODULE(NativeModule, NSObject)

RCT_EXTERN_METHOD(logMessage:(NSString *)message)
RCT_EXTERN_METHOD(add:(NSInteger)a b:(NSInteger)b resolve:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject)
RCT_EXTERN_METHOD(subtract:(NSInteger)a b:(NSInteger)b resolve:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject)

@end

