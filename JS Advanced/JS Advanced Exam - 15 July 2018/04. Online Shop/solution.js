function onlineShop(selector) {
    let form = `<div id="header">Online Shop Inventory</div>
    <div class="block">
        <label class="field">Product details:</label>
        <br>
        <input placeholder="Enter product" class="custom-select">
        <input class="input1" id="price" type="number" min="1" max="999999" value="1"><label class="text">BGN</label>
        <input class="input1" id="quantity" type="number" min="1" value="1"><label class="text">Qty.</label>
        <button id="submit" class="button" disabled>Submit</button>
        <br><br>
        <label class="field">Inventory:</label>
        <br>
        <ul class="display">
        </ul>
        <br>
        <label class="field">Capacity:</label><input id="capacity" readonly>
        <label class="field">(maximum capacity is 150 items.)</label>
        <br>
        <label class="field">Price:</label><input id="sum" readonly>
        <label class="field">BGN</label>
    </div>`;
    $(selector).html(form);

    let $productName = $('.custom-select');
    let $price = $('#price');
    let $quantity = $('#quantity');
    let $button = $('#submit');
    let $totalPrice = $('#sum');
    let $display = $('.display');
    let $capacity = $('#capacity');

    $productName.on('keyup', () => $button.attr('disabled', $productName.val().length <= 0));

    $button.on('click', function () {
        let $li = $('<li>');
        $li.text(`Product: ${$productName.val()} Price: ${$price.val()} Quantity: ${$quantity.val()}`);
        $display.append($li);

        $capacity.val(calculateCapacity());
        $totalPrice.val(Number($totalPrice.val()) + Number($price.val()));

        reset();
    });

    function reset() {
        $button.attr('disabled', true);
        $price.val(1);
        $quantity.val(1);
        $productName.val('');
    }

    function calculateCapacity() {
        let currentCapacity = Number($capacity.val() ? $capacity.val() : 0) + Number($quantity.val());

        if (currentCapacity >= 150){
            $capacity.addClass('fullCapacity');
            disable();
            return 'full';
        } else {
            return currentCapacity;
        }
    }

    function disable() {
        $price.attr('disabled', true);
        $quantity.attr('disabled', true);
        $productName.attr('disabled', true);
    }
}