import React from 'react'
import {Button, Text, View} from 'react-native'

export default ({apiKey, callbackAction, delay, flash, from, performanceTracking, text, to}) => {
    const [disabled, setDisabled] = React.useState(false)
    const [response, setResponse] = React.useState(null)

    return <View>
        <Button
            disabled={disabled}
            onPress={async () => {
                const body = {
                    delay,
                    flash,
                    from,
                    json: true,
                    performance_tracking: performanceTracking,
                    text,
                    to,
                }
                const headers = {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'X-Api-Key': apiKey,
                }
                const requestInit = {
                    body: JSON.stringify(body),
                    headers,
                    method: 'POST',
                }

                try {
                    setDisabled(true)
                    const res = await fetch('https://gateway.sms77.io/api/sms', requestInit)
                    const json = await res.json()
                    setResponse(json.success)
                } catch (e) {
                    setResponse(e.message)
                } finally {
                    setDisabled(false)
                    if (callbackAction) callbackAction(response)
                }
            }}
            title='Send SMS'
        />

        {
            response && <Text style={{textAlign: 'center'}}>{response}</Text>
        }
    </View>
}
