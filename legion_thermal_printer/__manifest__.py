# -*- coding: utf-8 -*-

{
    "name": "Thermal Printer Receipt",
    'version': '16.0.0.0',
    "author": "Bytelegion",
    "website": "http://www.bytelegions.com",
    'company': 'Bytelegion',
    'depends': ['base', 'sale'],
    'license': 'LGPL-3',
    "category": 'Sale & Invoice Receipt',

    "summary": 'Thermal Purchase Order, Sale/Quotation & Invoice Receipt',
    # "description": """All The Sale Customizations Sale Order and Invoice""",

    'data': [
        'report/reports.xml',

        'report/invoice_receipt.xml',
        'report/sale_receipt.xml',
        'report/purchase_receipt.xml',
    ],

    'installable': True,
    'application': True,
    'auto_install': False,
    'images': ['static/description/icon.png', 'static/description/Snap_1.jpeg'],
    'images': ['static/description/banner.gif']
}

