import React from 'react'
import {Button, Text, View} from 'react-native'
import {request} from '../../utils'

export default ({apiKey, callbackAction, numbers}) => {
    const [disabled, setDisabled] = React.useState(false)
    const [response, setResponse] = React.useState(null)

    return <View>
        <Button
            disabled={disabled}
            onPress={async () => {
                const data = {
                    apiKey,
                    json: true,
                    number: numbers,
                    type: 'mnp',
                }

                try {
                    setDisabled(true)
                    const json = await request('POST', 'lookup', data)
                    setResponse(json)
                } catch (e) {
                    setResponse(e.message)
                } finally {
                    setDisabled(false)
                    if (callbackAction) callbackAction(response)
                }
            }}
            title='Lookup MNP'
        />

        {
            response && <Text style={{textAlign: 'center'}}>{JSON.stringify(response)}</Text>
        }
    </View>
}
