const request = require('supertest');
const {expect} = require('chai');
require('dotenv').config()
const {obterToken} = require('../helpers/autenticacao.js')
const postTransferencias = require('../fixtures/postTransferencias.json')

let token

describe('Transferencias', () =>{
    describe('POST /transferencias', () =>{
        

        beforeEach(async() => {
            token = await obterToken('julio.lima', '123456')
        })


        it('Deve retornar sucesso com 201 quando o valor for igual ou acima de R$ 10,00', async() =>{
            const bodyTranferencias = {...postTransferencias}

            const resposta = await request(process.env.BASE_URL)
                .post('/transferencias')
                .set('Content-type', 'application/json')
                .set('Authorization',`Bearer ${token}`)
                .send(bodyTranferencias)

                expect(resposta.status).to.equal(201);
                console.log(resposta.body)
        })

        it('Deve retornar falha com 422 quando o valor for abaixo de R$ 10,00', async() =>{
            const bodyTranferencias = {...postTransferencias}
            bodyTranferencias.valor = 7

            const resposta = await request(process.env.BASE_URL)
                .post('/transferencias')
                .set('Content-type', 'application/json')
                .set('Authorization',`Bearer ${token}`)
                .send(bodyTranferencias)

                expect(resposta.status).to.equal(422);
                console.log(resposta.body)

        })
    })

    describe('GET /transferencias/{id}', () =>{
        it('Deve retornar sucesso com 200 e dados iguais ao registro de transfêrencia contido no banco de dados quando o id for válido.', async() =>{
            const resposta = await request(process.env.BASE_URL)
                .get('/transferencias/27')
                .set('Authorization',`Bearer ${token}`)
                
            
                expect(resposta.status).to.equal(200)
                expect(resposta.body.id).to.equal(27)
                expect(resposta.body.id).to.be.a('number')
                expect(resposta.body.conta_origem_id).to.equal(1)
                expect(resposta.body.conta_destino_id).to.equal(2)
                expect(resposta.body.valor).to.equal(11.00)


        })
    })

    describe('GET /transferencias', () =>{
        it('Deve retornar 10 elementos na paginação quando informar limite de 10 registros.', async() => {
            const resposta = await request(process.env.BASE_URL)
                .get('/transferencias?page=1&limit=10')
                .set('Authorization',`Bearer ${token}`)

                console.log(resposta.body)
                expect(resposta.status).to.equal(200)
                expect(resposta.body.limit).to.equal(10);
                expect(resposta.body.transferencias).to.have.lengthOf(10)
        })
    })
})