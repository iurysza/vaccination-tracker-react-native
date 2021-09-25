package com.reactnativevaccinationtracker

import android.util.Log
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.github.iurysza.vaccinationtracker.VaccinationTracker
import com.github.iurysza.vaccinationtracker.cache.DatabaseDriverFactory
import com.google.gson.Gson
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.launch
import org.json.JSONArray


class VaccinationtrackerModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {

    private val vaccinationtracker = VaccinationTracker(DatabaseDriverFactory(reactContext))

    override fun getName(): String = "Vaccinationtracker"

    @ReactMethod
    fun getVaccinationData(isForced: Boolean, promise: Promise) = GlobalScope.launch {
        runCatching {
            val response = vaccinationtracker.getVaccinationData(isForced)
            Log.d(TAG, "response before parsing: $response")
            promise.resolve(
                JsonConvert.jsonToReact(JSONArray(gson.toJson(response)))
            )
        }.onFailure {
            Log.d(TAG, "Error while requesting data: $it")
            promise.reject(it)
        }
    }

    companion object {
        private val gson = Gson()
    }
}

private const val TAG = "NativeModule"
