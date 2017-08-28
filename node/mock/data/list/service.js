/**
 * Created by sunmy on 2017/8/26.
 */

var type = require('../../type');

module.exports = {
    common: {
        url: '/service_list/common/_data',
        type: 'GET',
        data: {
            message: '',
            error: 0,
            data: [
                {
                    id: type.id(),
                    name: type.string({
                        min: 5,
                        max: 10
                    }),
                    price: type.figure({
                        min: 1000,
                        max: 5000
                    })
                }
            ]
        }
    },
    recommend: {
        url: '/service_list/recommend/_data',
        type: 'GET',
        data: {
            message: '',
            error: 0,
            data: [
                {
                    id: type.id(),
                    name: type.string({
                        lst: [
                            '文案一',
                            '文案二',
                            '文案三'
                        ]
                    }),
                    price: type.figure({
                        min: 20,
                        max: 55000
                    }),
                    tag: ''
                }
            ]
        }
    }
}
