import React from 'react'
import {Button, Text, View} from 'react-native'
import {request} from '../../utils'

export default ({apiKey, callbackAction, delay, flash, from, performanceTracking, text, to}) => {
    const [disabled, setDisabled] = React.useState(false)
    const [response, setResponse] = React.useState(null)

    return <View>
        <Button
            disabled={disabled}
            onPress={async () => {
                const data = {
                    apiKey,
                    delay,
                    flash,
                    from,
                    json: true,
                    performance_tracking: performanceTracking,
                    text,
                    to,
                }

                try {
                    setDisabled(true)
                    const json = await request('POST', 'sms', data)
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
