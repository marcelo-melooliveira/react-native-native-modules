package com.nativemodules

import android.content.Intent
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod


class OpenActivityModule(reactContext: ReactApplicationContext?) :
    ReactContextBaseJavaModule(reactContext) {
    override fun getName(): String {
        return "OpenActivityModule"
    }

    @ReactMethod
    fun openActivityEvent() {
        val intent = Intent(currentActivity, MainActivity2::class.java)
        currentActivity!!.startActivity(intent)
    }
}