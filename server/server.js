const fs = require('fs').promises;
const fastify = require('fastify')({ logger: true });
require('dotenv').config();
fastify.register(require('@fastify/cors'), {});

fastify.get('/', async (request, reply) => {
    try {
        const data = await fs.readFile('./users.json', 'utf8');
        let result = JSON.parse(data);

        if (request.query.term) {
            result = result.filter(elem => elem.name.toLowerCase().includes(request.query.term.toLowerCase()));
        }

        reply.send(result);
    } catch (err) {
        fastify.log.error('File read failed:', err);
        reply.code(500).send('Internal Server Error');
    }
});

const start = async () => {
    try {
        await fastify.listen({ port: process.env.PORT || 8000, host: '127.0.0.1' });
        fastify.log.info(`Server listening on ${fastify.server.address().port}`);
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
};

start();
