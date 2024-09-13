import { StyleSheet, Text, View } from 'react-native'
import React, { useMemo, forwardRef } from 'react'
import BottomSheet from '@gorhom/bottom-sheet'

const Comments = forwardRef((props, ref) => {
    const snapPoints = useMemo(() => ['100%'],[])
    return (
        <BottomSheet
            ref={ref}
            index={-1}
            snapPoints={snapPoints}
            enablePanDownToClose={true}
        >
            <View style={styles.contentContainer}>
                <Text>Comments</Text>
            </View>
        </BottomSheet>
    )
})

export default Comments

const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})