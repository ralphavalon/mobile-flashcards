import * as storage from './DeckStorage'
import { Notifications, Permissions } from 'expo';

export const DECK_QUIZ = 'flashcards:quiz'


export function clearLocalNotification() {
    return storage.remove(DECK_QUIZ)
        .then(Notifications.cancelAllScheduledNotificationsAsync)
}

function createNotification() {
    return {
        title: "Don't forget me",
        body: "Remember to take your test for today!!!",
        ios: {
            sound: true,
        },
        android: {
            sound: true,
            priority: 'high',
            sticky: false,
            vibrate: true,
        }
    }
}

export function setLocalNotification() {
    storage.remove(DECK_QUIZ)
        .then(JSON.parse)
        .then((data) => {
            if (data === null) {
                Permissions.askAsync(Permissions.NOTIFICATIONS)
                    .then(({ status }) => {
                        if (status === 'granted') {
                            Notifications.cancelAllScheduledNotificationsAsync()

                            let tomorrow = new Date();
                            tomorrow.setDate(tomorrow.getDate() + 1)

                            Notifications.scheduleLocalNotificationAsync(
                                createNotification(), {
                                    time: tomorrow,
                                    repeat: 'day',
                                }
                            )

                            storage.save(DECK_QUIZ, JSON.stringify(true))
                        }
                    })
            }
        })
}
