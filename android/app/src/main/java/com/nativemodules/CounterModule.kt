package com.nativemodules

import android.util.Log
import com.facebook.react.bridge.*

class CounterModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {
    private var eventCounter = 0;
    private var userName = "user_default"

    override fun getName() = "CounterModule"
    @ReactMethod
    fun createCounterEvent(user: String, callback: Callback) {
        // Log.d("CounterModule", "Create event called with name: $name and location: $location")
        Log.d("CounterModule", "Logged from our CounterModule")
        userName = user
        eventCounter += 1
        callback.invoke("Data returned from Conter Native module, eventCounter = $eventCounter")
    }

    @ReactMethod
    fun createCounterPromise(promise: Promise) {
        try{
            promise.resolve("Data returned from Promise, userName = $userName and eventCounter = $eventCounter")
        }catch(e: Exception){
            promise.reject("error returned from Promise", e)
        }
    }
}