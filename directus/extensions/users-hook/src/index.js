import { countries } from 'utilities';

export default (events, { services, database }) => {
    const { MailService } = services;

    events.filter('users.create', async function (input, _meta) {
        const country = (input.country || 'IT').toUpperCase();
        if (!countries[country]) throw new Error(`country ${country} not valid`);

        input.country = country;
        input.username = input.username || input.email;
    });

    events.action('users.create', async function (input, { schema }) {
        const mailService = new MailService({ schema });

        try {
            await mailService.send({
                to: input.payload.email || process.env.ADMIN_EMAIL,
                template: {
                    name: 'registered-user',
                    data: input.payload,
                },
            });
        } catch (error) {
            throw new Error(error);
        }
    });
};
