import Item from '../src/items';


describe('Item', function() {

    it('should return the first item', function() {
        expect(Item.getFirstItem()).toBe('item 1')
    })
})