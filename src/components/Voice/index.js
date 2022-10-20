import React from 'react'
import {Button, Text, View} from 'react-native'
import {request} from '../../utils'

export default props => {
    const {apiKey, callbackAction, from, text, to} = props
    const [disabled, setDisabled] = React.useState(false)
    const [response, setResponse] = React.useState(null)

    return <View>
        <Button
            disabled={disabled}
            onPress={async () => {
                try {
                    setDisabled(true)
                    const data = {
                        apiKey,
                        from,
                        json: true,
                        text,
                        to,
                    }
                    const json = await request('POST', 'voice', data)
                    setResponse(json.success)
                } catch (e) {
                    setResponse(e.message)
                } finally {
                    setDisabled(false)
                    if (callbackAction) callbackAction(response)
                }
            }}
            title='Start Voice Call'
        />

        {
            response && <Text style={{textAlign: 'center'}}>{response}</Text>
        }
    </View>
}
