from kafka import KafkaProducer
import time

def connectToKafkaProducer():
    serverLink = "192.168.1.124:9092"
    producer = KafkaProducer(bootstrap_servers=serverLink)
    print(producer.bootstrap_connected())
    return producer

def sendToKafka(producer, topic, message):
    producer.send(topic, message)
    producer.flush()

producer = connectToKafkaProducer()


while True:
    sendToKafka(producer, "JobStatus", b"Hello World From Shit Server")
    time.sleep(2)