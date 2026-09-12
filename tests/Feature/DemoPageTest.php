<?php

use Inertia\Testing\AssertableInertia as Assert;

test('root renders the Laundry Mastery landing page with server configuration', function () {
    config()->set([
        'analytics.payment_mode' => 'internal',
        'analytics.product_name' => 'Webinar Laundry Mastery',
        'analytics.product_price' => 35000,
        'analytics.product_original_price' => 120000,
        'analytics.whatsapp_number' => '6281234567890',
        'analytics.whatsapp_default_message' => 'Halo, saya tertarik.',
        'analytics.webinar_starts_at' => '2026-10-10T09:00:00+07:00',
        'analytics.promo_ends_at' => '2026-10-09T23:59:59+07:00',
    ]);

    $this->get('/')->assertInertia(fn (Assert $page) => $page
        ->component('index')
        ->where('tracking.pageUrl', '/')
        ->where('paymentMode', 'internal')
        ->where('productName', 'Webinar Laundry Mastery')
        ->where('productPrice', 35000)
        ->where('productOriginalPrice', 120000)
        ->where('webinarStartsAt', '2026-10-10T09:00:00+07:00')
        ->where('promoEndsAt', '2026-10-09T23:59:59+07:00')
        ->where('whatsappUrl', 'https://wa.me/6281234567890?text=Halo%2C+saya+tertarik.'));
});
