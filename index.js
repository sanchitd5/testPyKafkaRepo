const { Kafka } = require('kafkajs');

const kafka = new Kafka({
    clientId: 'some-random-shit',
    brokers: ['192.168.1.137:29092', '192.168.1.124:29092'],

});

const producer = kafka.producer();
const consumer = kafka.consumer({ groupId: 'some-random-shit' });

const run = async () => {

    // Consuming
    await consumer.connect();
    await consumer.subscribe({ topic: 'JobStatus', fromBeginning: true })

    await consumer.run({
        eachMessage: async ({ topic, partition, message }) => {
            console.log({
                partition,
                offset: message.offset,
                value: message.value.toString(),
            })
        },
    })

    // let num = 0;

    // // Producing
    // await producer.connect();
    // setInterval(async () => {
    //     await producer.send({
    //         topic: 'JobStatus',
    //         messages: [
    //             { value: 'Hello user! : ' + num },
    //         ],
    //     });
    //     num++;
    // }, 10000);




}

run().catch(console.error)