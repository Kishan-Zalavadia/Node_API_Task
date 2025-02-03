const {z} = require('zod')

const postRequestSchema = z.object({
    name: z.string().trim().min(2,'name should contain atlist 2 char'),
    email:z.string().email(),
    password:z.string().min(8,'password should have atlist 8 char').max(20,'password should have maximum 20 char').regex(/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/,'password should contain atlist one uppercase,one lowercase and one digit')
})

const updateRequestSchema = z.object({
    name:z.string().min(2,'name should contain atlist 2 char'),
    email:z.string().email()
})

module.exports = { postRequestSchema, updateRequestSchema}


