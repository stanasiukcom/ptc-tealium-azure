/* Simple form tracking extension to run on tealiumecommerce.com/checkout/onepage

Instructions:
1. Add a new "Javascript Code" extension in Tealium iQ
2. Copy the content of this file
3. Add a condition, so the extension runs only on tealiumecommerce.com/checkout/onepage page (eg. pathname contains...)
4. Approve your draft for publish

*/

try {
    document.querySelectorAll('.opc input').forEach(function(el, i) {
        el.addEventListener('blur', function() {
            utag.link({
                'tealium_event': 'form_interaction',
                'form_name': 'billing',
                'field_name': this.getAttribute('id'),
                'field_index': i - 7
            });
        });
    });
} catch (error) {
    
}