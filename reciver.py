from kafka import KafkaConsumer

def listenToKafka():
    serverLink = ""
    consumer = KafkaConsumer('JobStatus', bootstrap_servers=serverLink)
    for message in consumer:
        print(message)
        
listenToKafka()
