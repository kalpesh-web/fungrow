const reviews = {
    jane: [
        { name: "Client A", review: "Jane did an excellent job on our website!" },
        { name: "Client B", review: "Great work, very professional." }
    ],
    john: [
        { name: "Client C", review: "John's designs are top-notch!" },
        { name: "Client D", review: "Creative and timely delivery." }
    ],
    emily: [
        { name: "Client E", review: "Emily's writing skills are amazing. Highly recommended!" },
        { name: "Client F", review: "Delivered high-quality content on time." }
    ],
    michael: [
        { name: "Client G", review: "Michael improved our SEO significantly." },
        { name: "Client H", review: "Professional and effective SEO services." }
    ]
};

function showReviews(freelancer) {
    const reviewList = document.getElementById('review-list');
    reviewList.innerHTML = ''; // Clear previous reviews
    const freelancerReviews = reviews[freelancer];
    freelancerReviews.forEach(review => {
        const reviewDiv = document.createElement('div');
        reviewDiv.classList.add('review');
        reviewDiv.innerHTML = `<p><strong>${review.name}:</strong> ${review.review}</p>`;
        reviewList.appendChild(reviewDiv);
    });
}
