const questionList = [
    {
        questionQty: "Câu hỏi 1:",
        question: "Phần của đường bộ được sử dụng cho các phương tiện giao thông qua lại là gì?",
        answer: ["Phần mặt đường và lề đường.", "Phần đường xe chạy.", "Phần đường xe cơ giới."],
        correct: 2,
        suggest: "Giải thích: Phần đường xe chạy là phần của đường bộ được sử dụng cho phương tiện giao thông qua lại"
        
    },
    {
        questionQty: "Câu hỏi 2:",
        question: `"Làn đường" là gì?`,
        answer: ["Là một phần của phần đường xe chạy được chia theo chiều dọc của đường, sử dụng cho xe chạy.", "Là một phần của phần đường xe chạy được chia theo chiều dọc của đường, có bề rộng đủ cho xe chạy an toàn.", "Là đường cho xe ô tô chạy, dừng, đỗ an toàn."],
        correct: 2,
        suggest: "Giải thích: Làn đường có bề rộng đủ cho xe chạy an toàn.",
    },
    {
        questionQty: "Câu hỏi 3:",
        question: `Khái niệm "Khổ giới hạn của đường bộ" được hiểu như thế nào là đúng?`,
        answer: ["Là khoảng trống có kích thước giới hạn về chiều cao, chiều rộng của đường, cầu, bến phà, hầm đường bộ để các xe kể cả hàng hóa xếp trên xe đi qua được an toàn.", "Là khoảng trống có kích thước giới hạn về chiều rộng của đường, cầu, bến phà, hầm trên đường bộ để các xe kể cả hàng hóa xếp trên xe đi qua được an toàn.", "Là khoảng trống có kích thước giới hạn về chiều cao của cầu, bến phà, hầm trên đường bộ để các xe đi qua được an toàn."],
        correct:1,
        suggest:"Giải thích: Khổ giới hạn đường sẽ có chiều cao, chiều rộng của đường nha 😄"
    },
    {
        questionQty: "Câu 4:",
        question: `Trong các khái niệm dưới đây, "dải phân cách" được hiểu như thế nào là đúng?`,
        answer: ["Là bộ phận của đường để ngăn cách không cho các loại xe vào những nơi không được phép.", "Là bộ phận của đường để phân tách phần đường xe chạy và hành lang an toàn giao thông.", "Là bộ phận của đường để phân chia mặt đường thành hai chiều xe chạy riêng biệt hoặc để phân chia phần đường của xe cơ giới và xe thô sơ."],
        correct: 3,
        suggest:"Giải thích: Dải phân cách nó nằm ở giữa đường đó, chia 2 chiều riêng biệt 😆"
    },
    {
        questionQty: "Câu 5: ",
        question: ` "Dải phân cách" trên đường bộ gồm những loại nào?`,
        answer: ["Dải phân cách gồm loại cố định và loại di động.","Dải phân cách gồm tường chống ồn, hộ lan cứng và hộ lan mềm.","Dải phân cách gồm giá long môn và biển báo hiệu đường bộ."],
        correct: 1,
        suggest:"Giải thích: Dải phân cách gồm cố định là mấy cái cột bê tông hoặc mấy thanh sắt ấy và di động là mấy cái như hộp nhựa đó 😅"
    },
    {
        questionQty: "Câu 6:",
        question: "Người lái xe được hiểu như thế nào trong các khái niệm dưới đây?",
        answer: ["Là người điều khiển xe cơ giới.","Là người điều khiển xe thô sơ.","Là người điều khiển xe có súc vật kéo."],
        correct: 1,
        suggest:"Giải thích: Người lái xe là người điều khiển xe cơ giới.Câu này thì chắc không ai sai đâu 😂"
    },
    {
        questionQty: "câu số 7:",
        question: "Đường mà trên đó phương tiện tham gia giao thông được các phương tiện giao thông đến từ hướng khác nhường đường khi qua nơi đường giao nhau, được cắm biển báo hiệu đường ưu tiên là loại đường gì?",
        answer: ["Đường không ưu tiên.","Đường tỉnh lộ.","Đường Quốc Lộ","Đường Ưu Tiên"],
        correct: 4,
        suggest:"Giải thích: Đọc ở trên mà thấy chữ đường ưu tiên thì mình chọn đáp án đường ưu tiên luôn 🤣"
    },
    {
        questionQty: "Câu 8:",
        question: `Khái niệm "phương tiện giao thông cơ giới đường bộ" được hiểu thế nào là đúng?`,
        answer: ["Gồm xe ô tô; máy kéo; xe mô tô hai bánh; xe mô tô ba bánh; xe gắn máy; xe cơ giới dùng cho người khuyết tật và xe máy chuyên dùng.","Gồm xe ô tô; máy kéo; rơ moóc hoặc sơ mi rơ moóc được kéo bởi xe ô tô, máy kéo; xe mô tô hai bánh; xe mô tô ba bánh, xe gắn máy (kể cả xe máy điện) và các loại xe tương tự."],
        correct: 2,
        suggest:"Giải thích: Phương tiện giao thông cơ giới không có xe máy chuyên dùng nha mấy ba 😊"
    },
    {
        questionQty: "Câu 9:",
        question: `Khái niệm "phương tiện giao thông thô sơ đường bộ" được hiểu thế nào là đúng?`,
        answer: ["Gồm xe đạp (kể cả xe đạp máy, xe đạp điện), xe xích lô, xe lăn dùng cho người khuyết tật, xe súc vật kéo và các loại xe tương tự.","Gồm xe đạp (kể cả xe đạp máy, xe đạp điện), xe gắn máy, xe cơ giới dùng cho người khuyết tật và xe máy chuyên dùng.","Gồm xe ô tô, máy kéo, rơ moóc hoặc sơ mi rơ moóc được kéo bởi xe ô tô, máy kéo."],
        correct: 1,
        suggest:"Giải thích: Đáp án 2 và 3 có xe bằng động cơ mà, thô sơ gì không biết 😌"
    },
    {
        questionQty: "Câu 10: ",
        question: `"Phương tiện tham gia giao thông đường bộ" gồm những loại nào?`,
        answer: ["Phương tiện giao thông cơ giới đường bộ.",
            "Phương tiện giao thông thô sơ đường bộ và xe máy chuyên dùng.",
            "Cả ý 1 và ý 2."
        ],
        correct: 3,
        suggest:"Giải thích: Cả 2 luôn nha, đường bộ thì xe nào cũng chơi hết 😉"
    },
    {
        questionQty: "Câu 11:",
        question: `"Người tham gia giao thông đường bộ" gồm những đối tượng nào?`,
        answer: ["Người điều khiển, người sử dụng phương tiện tham gia giao thông đường bộ.",
            "Người điều khiển, dẫn dắt súc vật; người đi bộ trên đường bộ.",
            "Cả ý 1 và ý 2."
        ],
        correct: 3,
        suggest:"Giải thích: Cả 2 luôn nha, đường bộ thì xe nào cũng chơi hết, dắt bò đi ăn cỏ còn được 😉"
    },
    {
        questionQty: "Câu 12: ",
        question: `"Người điều khiển phương tiện tham gia giao thông đường bộ" gồm những đối tượng nào dưới đây?
`,
        answer: ["Người điều khiển xe cơ giới, người điều khiển xe thô sơ.",
            "Người điều khiển xe máy chuyên dùng tham gia giao thông đường bộ.",
            "Cả ý 1 và ý 2."
        ],
        correct: 3,
        suggest:"Giải thích: Người điều khiển phương tiện bao gồm cả xe cơ giới và xe máy chuyên dùng nha! 🤔"
    },
    {
        questionQty: "Câu 13:",
        question: `Khái niệm "người điều khiển giao thông" được hiểu như thế nào là đúng?`,
        answer: ["Là người điều khiển phương tiện tham gia giao thông tại nơi thi công, nơi ùn tắc giao thông, ở bến phà, tại cầu đường bộ đi chung với đường sắt.",
            "Là cảnh sát giao thông, người được giao nhiệm vụ hướng dẫn giao thông tại nơi thi công, nơi ùn tắc giao thông, ở bến phà, tại cầu đường bộ đi chung với đường sắt.",
            "Là người tham gia giao thông tại nơi thi công, nơi ùn tắc giao thông, ở bến phà, tại cầu đường bộ đi chung với đường sắt."
        ],
        correct: 2,
        suggest:"Giải thích: Người điều khiển giao thông là cảnh sát giao thông đó! 🚓."
    },
    {
        questionQty: "Câu 14: ",
        question: `Trong các khái niệm dưới đây, khái niệm "dừng xe" được hiểu như thế nào là đúng?`,
        answer: ["Là trạng thái đứng yên của phương tiện giao thông không giới hạn thời gian để cho người lên, xuống phương tiện; xếp dỡ hàng hóa hoặc thực hiện công việc khác.",
            "Là trạng thái đứng yên tạm thời của phương tiện giao thông trong một khoảng thời gian cần thiết đủ để cho người lên, xuống phương tiện; xếp dỡ hàng hóa hoặc thực hiện công việc khác.",
            "Là trạng thái đứng yên của phương tiện giao thông không giới hạn thời gian giữa 02 lần vận chuyển hàng hóa hoặc hành khách."
        ],
        correct: 2,
        suggest:"Giải thích: Dừng xe là đứng yên tạm thời nha! 🤗"
    },
    {
        questionQty: "Câu 15:",
        question: `Khái niệm "đỗ xe" được hiểu như thế nào là đúng?`,
        answer: ["Là trạng thái đứng yên của phương tiện giao thông có giới hạn trong một khoảng thời gian cần thiết đủ để cho người lên, xuống phương tiện đó; xếp dỡ hàng hóa hoặc thực hiện công việc khác.",
            "Là trạng thái đứng yên của phương tiện giao thông không giới hạn thời gian."
        ],
        correct: 2,
        suggest:"Giải thích: Đỗ xe là đứng yên vô thời hạn, như nghỉ phép vậy! 😉"
    },
    {
        questionQty: "Câu 16: ",
        question: `Khái niệm "đường cao tốc" được hiểu như thế nào là đúng?`,
        answer: ["Đường dành riêng cho xe ô tô và một số loại xe chuyên dùng được phép đi vào theo quy định của Luật Giao thông đường bộ.",
            "Có dải phân cách phân chia đường cho xe chạy hai chiều riêng biệt mà dải phân cách này xe không được đi lên trên; không giao nhau cùng mức với một hoặc một số đường khác.",
            "Được bố trí đầy đủ trang thiết bị phục vụ, bảo đảm giao thông liên tục, an toàn, rút ngắn thời gian hành trình và chỉ cho xe ra, vào ở những điểm nhất định.",
            "Tất cả các ý trên."
        ],
        correct: 4,
        suggest:"Giải thích: Đường cao tốc bao gồm tất cả các ý trên nha! 😏"
    },
    {
        questionQty: "Câu 17:",
        question: "Hành vi nào dưới đây bị nghiêm cấm?",
        answer: ["Đỗ xe trên đường phố.",
            "Sử dụng xe đạp đi trên các tuyến quốc lộ có tốc độ cao.",
            "Làm hỏng (cố ý) cọc tiêu, gương cầu, dải phân cách.",
            "Sử dụng còi và quay đầu xe trong khu dân cư."
        ],
        correct: 3,
        suggest:"Giải thích: Làm hỏng (cố ý) cọc tiêu, gương cầu, dải phân cách là không ổn đâu nha! 😈"
    },
    {
        questionQty: "Câu 18:",
        question:" Hành vi đưa xe cơ giới, xe máy chuyên dùng không bảo đảm tiêu chuẩn an toàn kỹ thuật và bảo vệ môi trường vào tham gia giao thông đường bộ có bị nghiêm cấm hay không?",
        answer: ["Không nghiêm cấm",
            "Bị nghiêm cấm.",
            "Bị nghiêm cấm tùy theo các tuyến đường.",
            "Bị nghiêm cấm tùy theo loại xe."
        ],
        correct: 2,
        suggest:"Giải thích: Hành vi đưa xe không đảm bảo an toàn kỹ thuật bị nghiêm cấm."
    },
    {
        questionQty: "Câu 19:",
        question: " Cuộc đua xe chỉ được thực hiện khi nào?",
        answer: ["Diễn ra trên đường phố không có người qua lại.",
            "Được người dân ủng hộ.",
            "Được cơ quan có thẩm quyền cấp phép."
        ],
        correct: 3,
        suggest:"Giải thích: Cuộc đua xe cần cấp phép."
    },
    {
        questionQty: "Câu 20: ",
        question: "Người điều khiển phương tiện giao thông đường bộ mà trong cơ thể có chất ma túy có bị nghiêm cấm hay không?",
        answer: ["Bị nghiêm cấm.",
            "Không bị nghiêm cấm.",
            "Không bị nghiêm cấm, nếu có chất ma túy ở mức nhẹ, có thể điều khiển phương tiện tham gia giao thông."
        ],
        correct: 1,
        suggest:"Giải thích: Có ma túy bị nghiêm cấm."
    },
    {
        questionQty: "Câu 21:",
        question: " Việc lái xe mô tô, ô tô, máy kéo ngay sau khi uống rượu, bia có được phép hay không?",
        answer: ["Không được phép.",
            "Chỉ được lái ở tốc độ chậm và quãng đường ngắn.",
            "Chỉ được lái nếu trong cơ thể có nồng độ cồn thấp."
        ],
        correct: 1,
        suggest:"Giải thích: Uống rượu bia không được lái xe."
    },
    {
        questionQty: "Câu 22:",
        question: " Người điều khiển xe mô tô, ô tô, máy kéo trên đường mà trong máu hoặc hơi thở có nồng độ cồn có bị nghiêm cấm không?",
        answer: ["Bị nghiêm cấm.",
            "Không bị nghiêm cấm.",
            "Không bị nghiêm cấm, nếu nồng độ cồn trong máu ở mức nhẹ, có thể điều khiển phương tiện tham gia giao thông."
        ],
        correct: 1,
        suggest:"Giải thích: Trong máu hoặc hơi thở có nồng độ cồn bị nghiêm cấm."
    },
    {
        questionQty: "Câu 23: ",
        question: "Sử dụng rượu, bia khi lái xe, nếu bị phát hiện thì bị xử lý như thế nào?",
        answer: ["Chỉ bị nhắc nhở.",
            "Bị xử phạt hành chính hoặc có thể bị xử lý hình sự tùy theo mức độ vi phạm.",
            "Không bị xử lý hình sự."
        ],
        correct: 2,
        suggest:"Giải thích: Sử dụng rượu, bia khi lái xe bị phạt hành chính hoặc xử lý hình sự."
    },
    {
        questionQty: "Câu 24: ",
        question: "Theo Luật phòng chống tác hại của rượu, bia đối tượng nào dưới đây bị cấm sử dụng rượu, bia khi tham gia giao thông?",
        answer: ["Người điều khiển: xe ô tô, xe mô tô, xe đạp, xe gắn máy.",
            "Người ngồi phía sau người điều khiển xe cơ giới.",
            "Người đi bộ.",
            "Cả ý 1 và ý 2."
        ],
        correct: 1,
        suggest:"Giải thích: Người điều khiển bị cấm sử dụng rượu, bia khi tham gia giao thông."
    },
    {
        questionQty: "Câu 25:",
        question: " Hành vi giao xe cơ giới, xe máy chuyên dùng cho người không đủ điều kiện để điều khiển xe tham gia giao thông có được phép hay không?",
        answer: ["Chỉ được thực hiện nếu đã hướng dẫn đầy đủ.",
            "Không được phép.",
            "Được phép tùy từng trường hợp.",
            "Chỉ được phép thực hiện với thành viên trong gia đình."
        ],
        correct: 2,
        suggest:"Giải thích: Không được phép giao xe cho người không đủ điều kiện tham gia giao thông."
    },
    {
        questionQty: "Câu 26:",
        question: " Hành vi điều khiển xe cơ giới chạy quá tốc độ quy định, giành đường, vượt ẩu có bị nghiêm cấm hay không?",
        answer: ["Bị nghiêm cấm tùy từng trường hợp",
            "Không bị nghiêm cấm.",
            "Bị nghiêm cấm."
        ],
        correct: 3,
        suggest:"Giải thích: Hành vi điều khiển xe cơ giới chạy quá tốc độ quy định, giành đường, vượt ẩu bị nghiêm cấm."
    },
    {
        questionQty: "Câu 27: ",
        question: "Khi lái xe trên đường, người lái xe cần quan sát và đảm bảo tốc độ phương tiện như thế nào?",
        answer: ["Chỉ lớn hơn tốc độ tối đa cho phép khi đường vắng.",
            "Chỉ lớn hơn tốc độ tối đa cho phép vào ban đêm.",
            "Không vượt quá tốc độ cho phép"
        ],
        correct: 3,
        suggest:"Giải thích: Người lái xe không được vượt quá tốc độ cho phép."
    },
    {
        questionQty: "Câu 28:",
        question: " Phương tiện giao thông đường bộ di chuyển với tốc độ thấp hơn phải đi như thế nào?",
        answer: ["Đi về phía bên trái.",
            "Đi về phía bên phải.",
            "Đi ở giữa."
        ],
        correct: 2,
        suggest:"Giải thích: Di chuyển tốc độ thấp hơn đi về phía bên phải."
    },
    {
        questionQty: "Câu 29: ",
        question: "Trên đường có nhiều làn đường, khi điều khiển phương tiện ở tốc độ chậm bạn phải đi ở làn đường nào?",
        answer: ["Đi ở làn bên phải trong cùng",
            "Đi ở làn phía bên trái.",
            "Đi ở làn giữa.",
            "Đi ở bất cứ làn nào nhưng phải bấm đèn cảnh báo nguy hiểm để báo hiệu cho các phương tiện khác"
        ],
        correct: 1,
        suggest:"Giải thích: Tốc độ chậm đi ở làn bên phải trong cùng."
    },
    {
        questionQty: "Câu 30:",
        question: " Hành vi vượt xe tại các vị trí có tầm nhìn hạn chế, đường vòng, đầu dốc có bị nghiêm cấm hay không?",
        answer: ["Không bị nghiêm cấm.",
            "Không bị nghiêm cấm khi rất vội.",
            "Bị nghiêm cấm.",
            "Không bị nghiêm cấm khi khẩn cấp."
        ],
        correct: 3,
        suggest:"Giải thích: Hành vi vượt xe tại các vị trí có tầm nhìn hạn chế, đường vòng, đầu dốc bị nghiêm cấm."
    },
    {
        questionQty: "câu 31: ",
        question: "Khi lái xe trong khu đô thị và đông dân cư trừ các khu vực có biển cấm sử dụng còi, người lái xe được sử dụng còi như thế nào trong các trường hợp dưới đây?",
        answer: ["Từ 22 giờ đêm đến 5 giờ sáng.",
            "Từ 5 giờ sáng đến 22 giờ tối.",
            "Từ 23 giờ đêm đến 5 giờ sáng hôm sau."
        ],
        correct: 2,
        suggest:"Giải thích: Chỉ sử dụng còi từ 5 giờ sáng đến 22 giờ tối."
    },
    {
        questionQty: "Câu 32: ",
        question: "Người lái xe sử dụng đèn như thế nào khi lái xe trong khu đô thị và đông dân cư vào ban đêm?",
        answer: ["Bất cứ đèn nào miễn là mắt nhìn rõ phía trước.",
            "Chỉ bật đèn chiếu xa (đèn pha) khi không nhìn rõ đường.",
            "Đèn chiếu xa (đèn pha) khi đường vắng, đèn pha chiếu gần (đèn cốt) khi có xe đi ngược chiều.",
            "Đèn chiếu gần (đèn cốt)."
        ],
        correct: 4,
        suggest:"Giải thích: Trong đô thị sử dụng đèn chiếu gần."
    },
    {
        questionQty: "Câu 33:",
        question: " Hành vi lắp đặt, sử dụng còi, đèn không đúng thiết kế của nhà sản xuất đối với từng loại xe cơ giới có được phép hay không?",
        answer: ["Được phép.",
            "Không được phép.",
            "Được phép tùy từng trường hợp."
        ],
        correct: 2,
        suggest:"Giải thích: Không được phép lắp đặt còi đèn không đúng thiết kế."
    },
    {
        questionQty: "",
        question: "",
        answer: [],
        correct: 1,
        suggest:""
    },
    {
        questionQty: "",
        question: "",
        answer: [],
        correct: 1,
        suggest:""
    },
    {
        questionQty: "",
        question: "",
        answer: [],
        correct: 1,
        suggest:""
    },
    {
        questionQty: "",
        question: "",
        answer: [],
        correct: 1,
        suggest:""
    },
    {
        questionQty: "",
        question: "",
        answer: [],
        correct: 1,
        suggest:""
    },
    {
        questionQty: "",
        question: "",
        answer: [],
        correct: 1,
        suggest:""
    },
    {
        questionQty: "",
        question: "",
        answer: [],
        correct: 1,
        suggest:""
    },
    {
        questionQty: "",
        question: "",
        answer: [],
        correct: 1,
        suggest:""
    },
    {
        questionQty: "",
        question: "",
        answer: [],
        correct: 1,
        suggest:""
    },
    {
        questionQty: "",
        question: "",
        answer: [],
        correct: 1,
        suggest:""
    },
    {
        questionQty: "",
        question: "",
        answer: [],
        correct: 1,
        suggest:""
    },
    {
        questionQty: "",
        question: "",
        answer: [],
        correct: 1,
        suggest:""
    },
    {
        questionQty: "",
        question: "",
        answer: [],
        correct: 1,
        suggest:""
    },
    {
        questionQty: "",
        question: "",
        answer: [],
        correct: 1,
        suggest:""
    },
    {
        questionQty: "",
        question: "",
        answer: [],
        correct: 1,
        suggest:""
    },
    {
        questionQty: "",
        question: "",
        answer: [],
        correct: 1,
        suggest:""
    },
    {
        questionQty: "",
        question: "",
        answer: [],
        correct: 1,
        suggest:""
    },
    {
        questionQty: "",
        question: "",
        answer: [],
        correct: 1,
        suggest:""
    },
    {
        questionQty: "",
        question: "",
        answer: [],
        correct: 1,
        suggest:""
    },
    {
        questionQty: "",
        question: "",
        answer: [],
        correct: 1,
        suggest:""
    },
    {
        questionQty: "",
        question: "",
        answer: [],
        correct: 1,
        suggest:""
    },
    {
        questionQty: "",
        question: "",
        answer: [],
        correct: 1,
        suggest:""
    },
    {
        questionQty: "",
        question: "",
        answer: [],
        correct: 1,
        suggest:""
    },
    {
        questionQty: "",
        question: "",
        answer: [],
        correct: 1,
        suggest:""
    },
    {
        questionQty: "",
        question: "",
        answer: [],
        correct: 1,
        suggest:""
    },
    {
        questionQty: "",
        question: "",
        answer: [],
        correct: 1,
        suggest:""
    },
    {
        questionQty: "",
        question: "",
        answer: [],
        correct: 1,
        suggest:""
    },
    {
        questionQty: "",
        question: "",
        answer: [],
        correct: 1,
        suggest:""
    },
    {
        questionQty: "",
        question: "",
        answer: [],
        correct: 1,
        suggest:""
    },
    {
        questionQty: "",
        question: "",
        answer: [],
        correct: 1,
        suggest:""
    },
    {
        questionQty: "",
        question: "",
        answer: [],
        correct: 1,
        suggest:""
    },
    {
        questionQty: "",
        question: "",
        answer: [],
        correct: 1,
        suggest:""
    },
    {
        questionQty: "",
        question: "",
        answer: [],
        correct: 1,
        suggest:""
    },
    {
        questionQty: "",
        question: "",
        answer: [],
        correct: 1,
        suggest:""
    },
    {
        questionQty: "",
        question: "",
        answer: [],
        correct: 1,
        suggest:""
    },
    {
        questionQty: "",
        question: "",
        answer: [],
        correct: 1,
        suggest:""
    },
    {
        questionQty: "",
        question: "",
        answer: [],
        correct: 1,
        suggest:""
    },
    {
        questionQty: "",
        question: "",
        answer: [],
        correct: 1,
        suggest:""
    },
    {
        questionQty: "",
        question: "",
        answer: [],
        correct: 1,
        suggest:""
    },
    {
        questionQty: "",
        question: "",
        answer: [],
        correct: 1,
        suggest:""
    },
    {
        questionQty: "",
        question: "",
        answer: [],
        correct: 1,
        suggest:""
    },
    {
        questionQty: "",
        question: "",
        answer: [],
        correct: 1,
        suggest:""
    },
    {
        questionQty: "",
        question: "",
        answer: [],
        correct: 1,
        suggest:""
    },
    {
        questionQty: "",
        question: "",
        answer: [],
        correct: 1,
        suggest:""
    },
    {
        questionQty: "",
        question: "",
        answer: [],
        correct: 1,
        suggest:""
    },
    {
        questionQty: "",
        question: "",
        answer: [],
        correct: 1,
        suggest:""
    },
    {
        questionQty: "",
        question: "",
        answer: [],
        correct: 1,
        suggest:""
    },
    {
        questionQty: "",
        question: "",
        answer: [],
        correct: 1,
        suggest:""
    },
    {
        questionQty: "",
        question: "",
        answer: [],
        correct: 1,
        suggest:""
    },
    {
        questionQty: "",
        question: "",
        answer: [],
        correct: 1,
        suggest:""
    },
    {
        questionQty: "",
        question: "",
        answer: [],
        correct: 1,
        suggest:""
    },
    {
        questionQty: "",
        question: "",
        answer: [],
        correct: 1,
        suggest:""
    },
    {
        questionQty: "",
        question: "",
        answer: [],
        correct: 1,
        suggest:""
    },
    {
        questionQty: "",
        question: "",
        answer: [],
        correct: 1,
        suggest:""
    },
    {
        questionQty: "",
        question: "",
        answer: [],
        correct: 1,
        suggest:""
    },
    {
        questionQty: "",
        question: "",
        answer: [],
        correct: 1,
        suggest:""
    },
    {
        questionQty: "",
        question: "",
        answer: [],
        correct: 1,
        suggest:""
    },
    {
        questionQty: "",
        question: "",
        answer: [],
        correct: 1,
        suggest:""
    },
    {
        questionQty: "",
        question: "",
        answer: [],
        correct: 1,
        suggest:""
    },
    {
        questionQty: "",
        question: "",
        answer: [],
        correct: 1,
        suggest:""
    },
    {
        questionQty: "",
        question: "",
        answer: [],
        correct: 1,
        suggest:""
    },
    {
        questionQty: "",
        question: "",
        answer: [],
        correct: 1,
        suggest:""
    },
    {
        questionQty: "",
        question: "",
        answer: [],
        correct: 1,
        suggest:""
    },
    {
        questionQty: "",
        question: "",
        answer: [],
        correct: 1,
        suggest:""
    },
    {
        questionQty: "",
        question: "",
        answer: [],
        correct: 1,
        suggest:""
    },
    {
        questionQty: "",
        question: "",
        answer: [],
        correct: 1,
        suggest:""
    },
    {
        questionQty: "",
        question: "",
        answer: [],
        correct: 1,
        suggest:""
    },
    {
        questionQty: "",
        question: "",
        answer: [],
        correct: 1,
        suggest:""
    },
    {
        questionQty: "",
        question: "",
        answer: [],
        correct: 1,
        suggest:""
    },
    {
        questionQty: "",
        question: "",
        answer: [],
        correct: 1,
        suggest:""
    },
    {
        questionQty: "",
        question: "",
        answer: [],
        correct: 1,
        suggest:""
    },
    {
        questionQty: "",
        question: "",
        answer: [],
        correct: 1,
        suggest:""
    },
    {
        questionQty: "",
        question: "",
        answer: [],
        correct: 1,
        suggest:""
    },
    {
        questionQty: "",
        question: "",
        answer: [],
        correct: 1,
        suggest:""
    },
    {
        questionQty: "",
        question: "",
        answer: [],
        correct: 1,
        suggest:""
    },
    {
        questionQty: "",
        question: "",
        answer: [],
        correct: 1,
        suggest:""
    },
    {
        questionQty: "",
        question: "",
        answer: [],
        correct: 1,
        suggest:""
    },
    {
        questionQty: "",
        question: "",
        answer: [],
        correct: 1,
        suggest:""
    },
    {
        questionQty: "",
        question: "",
        answer: [],
        correct: 1,
        suggest:""
    },
    {
        questionQty: "",
        question: "",
        answer: [],
        correct: 1,
        suggest:""
    },
    {
        questionQty: "",
        question: "",
        answer: [],
        correct: 1,
        suggest:""
    },
    {
        questionQty: "",
        question: "",
        answer: [],
        correct: 1,
        suggest:""
    },
    {
        questionQty: "",
        question: "",
        answer: [],
        correct: 1,
        suggest:""
    },
    {
        questionQty: "",
        question: "",
        answer: [],
        correct: 1,
        suggest:""
    },
    {
        questionQty: "",
        question: "",
        answer: [],
        correct: 1,
        suggest:""
    },
    {
        questionQty: "",
        question: "",
        answer: [],
        correct: 1,
        suggest:""
    },
    {
        questionQty: "",
        question: "",
        answer: [],
        correct: 1,
        suggest:""
    },
    {
        questionQty: "",
        question: "",
        answer: [],
        correct: 1,
        suggest:""
    },
    {
        questionQty: "",
        question: "",
        answer: [],
        correct: 1,
        suggest:""
    },
    {
        questionQty: "",
        question: "",
        answer: [],
        correct: 1,
        suggest:""
    },

];
let currentQuestion = 0;
let score = 0;
const questionQty = document.querySelector(".question__qty");
const questionTitle = document.querySelector(".question__title");
const suggestAnswer = document.querySelector(".suggest__answer");
const answerBtn = document.querySelectorAll(".answer__button");
const feedbackEl = document.querySelector(".feedback");

function loadQuestion() {
    const currentQuiz = questionList[currentQuestion];
    questionQty.textContent = currentQuiz.questionQty;
    questionTitle.textContent = currentQuiz.question;
    suggestAnswer.textContent = currentQuiz.suggest;
    feedbackEl.textContent = "";
    
    answerBtn.forEach((btn, index) => {
        
        btn.textContent = currentQuiz.answer[index]
        btn.disabled = false;
        btn.style.backgroundColor = "";
        if (btn.textContent === "") {
            btn.textContent = " dang cap nhat"
        }
    })
}
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

answerBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const selected = parseInt(e.target.getAttribute("data-index"));
        const correct = questionList[currentQuestion].correct;
        const ansTotal = document.querySelector(".ans__total");
        
        if (selected === correct) {
            score++;
            // ansTotal.textContent = score++;
            feedbackEl.textContent = "✅ Chính xác!";
            e.target.style.backgroundColor = "lightgreen";
            

        } else {
            score--;
            // ansTotal.textContent = score--;

            feedbackEl.textContent = "❌ Sai rồi!";
            e.target.style.backgroundColor = "tomato";
           
        }
        nextBtn.addEventListener("click", function () {
            if (selected === correct) {
            score++;
            

        } else {
            score--;
            
           
        }
        })

        // Disable all buttons
        // answerBtn.forEach(b => b.disabled = true)

    })
})

prevBtn.addEventListener("click", () => {
  currentQuestion--;
    loadQuestion();
    
})
nextBtn.addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < questionList.length) {
    loadQuestion();
  } else {
    questionTitle.textContent = `🎉 Bạn đã hoàn thành quiz!`;
    feedbackEl.textContent = `Điểm của bạn: ${score}/${questionList.length}`;
    document.querySelector("ul").style.display = "none";
    nextBtn.style.display = "none";
    prevBtn.style.display = "none";
  }
});

loadQuestion();

//  menu