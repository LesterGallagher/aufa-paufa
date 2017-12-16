import React, { Component } from 'react';

export default class ContactPage extends Component {
    render() {
        return (
            <article className="art">
                <form id="gform" method="POST" action="https://script.google.com/macros/s/AKfycbzLgJcEAuka1rIy3TLVKeYIkPTWuGoeYxN9nUlCvGJAwUJNNvBs/exec">
                    <input type="text" name="name" id="name" placeholder="Your Name" />
                    <small class="danger" id="email-invalid" style={{ display: 'none' }}>Email is Invalid</small>
                    <textarea type="text" name="message" id="name" rows="8" placeholder="Your Message" ></textarea>
                    <input type="email" name="email" id="name" placeholder="Your Contact Email" />
                    <button type="submit">Send</button>
                </form>
                <div id="thankyou_message" style={{ display: 'none', }}>
                    <h2><em>Thank You, </em>
                    I will get back to you soon</h2>
                    </div>
            </article>
        );
    }
}
