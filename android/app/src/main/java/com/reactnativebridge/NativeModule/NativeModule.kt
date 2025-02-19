package com.reactnativebridge

import android.util.Log
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod


class NativeModule(context: ReactApplicationContext) : ReactContextBaseJavaModule(context) {

    override fun getName(): String {
        return "NativeModule"
    }

    @ReactMethod
    fun logMessage(message: String) {
        Log.d("MyApp", message)
    }

    @ReactMethod
    fun add(a: Int, b: Int, promise: Promise) {
        val result = a + b
        promise.resolve(result)
    }

    @ReactMethod
    fun subtract(a: Int, b: Int, promise: Promise) {
        if (a >= b) {
            promise.resolve(a - b)
        } else {
            val error = Exception("a is less than b")
            promise.reject("subtract_error", "a is less than b", error)
        }
    }
}
