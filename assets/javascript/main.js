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
        questionQty: "Câu 34:",
        question: " Trong trường hợp đặc biệt, để được lắp đặt, sử dụng còi, đèn không đúng với thiết kế của nhà sản xuất đối với từng loại xe cơ giới bạn phải đảm bảo yêu cầu nào dưới đây?",
        answer: ["Phải đảm bảo phụ tùng do đúng nhà sản xuất đó cung cấp.",
            "Phải được chấp thuận của cơ quan có thẩm quyền.",
            "Phải là xe đăng ký và hoạt động tại các khu vực có địa hình phức tạp."
        ],
        correct: 2,
        suggest:"Giải thích: Lắp đặt còi đèn không đúng thiết kế phải được chấp thuận của cơ quan có thẩm quyền."
    },
    {
        questionQty: "Câu 35: ",
        question: "Việc sản xuất, mua bán, sử dụng biển số xe cơ giới, xe máy chuyên dùng được quy định như thế nào trong Luật Giao thông đường bộ?",
        answer: ["Được phép sản xuất, sử dụng khi bị mất biển số.",
            "Được phép mua bán, sử dụng khi bị mất biển số.",
            "Nghiêm cấm sản xuất, mua bán, sử dụng trái phép."
        ],
        correct: 3,
        suggest:"Giải thích: Nghiêm cấm sản xuất, mua bán, sử dụng trái phép."
    },
    {
        questionQty: "Câu 36:",
        question: " Người lái xe không được vượt xe khác khi gặp trường hợp nào ghi ở dưới đây?",
        answer: ["Trên cầu hẹp có một làn xe. Nơi đường giao nhau, đường bộ giao nhau cùng mức với đường sắt; xe được quyền ưu tiên đang phát tín hiệu ưu tiên đi làm nhiệm vụ.",
            "Trên cầu có từ 02 làn xe trở lên; nơi đường bộ giao nhau không cùng mức với đường sắt; xe được quyền ưu tiên đang đi phía trước nhưng không phát tín hiệu ưu tiên.",
            "Trên đường có 2 làn đường được phân chia làn bằng vạch kẻ nét đứt."
        ],
        correct: 1,
        suggest:"Giải thích: Không được vượt trên cầu hẹp có một làn xe."
    },
    {
        questionQty: "Câu 37: ",
        question: "Ở phần đường dành cho người đi bộ qua đường, trên cầu, đầu cầu, đường cao tốc, đường hẹp, đường dốc, tại nơi đường bộ giao nhau cùng mức với đường sắt có được quay đầu xe hay không?",
        answer: ["Được phép.",
            "Không được phép.",
            "Tùy từng trường hợp."
        ],
        correct: 2,
        suggest:"Giải thích: Không được phép quay đầu xe ở phần đường dành cho người đi bộ qua đường."
    },
    {
        questionQty: "Câu 38:",
        question: " Bạn đang lái xe, phía trước có một xe cảnh sát giao thông không phát tín hiệu ưu tiên bạn có được phép vượt hay không?",
        answer: ["Không được vượt.",
            "Được vượt khi đang đi trên cầu.",
            "Được phép vượt khi đi qua nơi giao nhau có ít phương tiện cùng tham gia giao thông.",
            "Được vượt khi đảm bảo an toàn."
        ],
        correct: 4,
        suggest:"Giải thích: Được vượt khi xe không phát tín hiệu ưu tiên."
    },
    {
        questionQty: "Câu 39:",
        question: " Bạn đang lái xe, phía trước có một xe cứu thương đang phát tín hiệu ưu tiên bạn có được phép vượt hay không?",
        answer: ["Không được vượt",
            "Được vuợt khi đang đi trên cầu",
            "Được phép vượt khi đi qua nơi giao nhau có ít phương tiện cùng tham gia giao thông.",
            "Được Vượt khi đảm bảo an toàn"
        ],
        correct: 1,
        suggest:"Giải thích: Không được vượt khi đang phát tín hiệu ưu tiên."
    },
    {
        questionQty: "Câu 40: ",
        question: "Người lái xe không được quay đầu xe trong các trường hợp nào dưới đây?",
        answer: ["Ở phần đường dành cho người đi bộ qua đường, trên cầu, đầu cầu, đường cao tốc, đường hẹp, đường dốc, tại nơi đường bộ giao nhau cùng mức với đường sắt",
            "Ở phía trước hoặc phía sau của phần đường dành cho người đi bộ qua đường, trên đường quốc lộ, tại nơi đường bộ giao nhau không cùng mức với đường sắt.",
            "cả ý 1 và ý 2"
        ],
        correct: 1,
        suggest:"Giải thích: Không được phép quay đầu xe ở phần đường dành cho người đi bộ qua đường."
    },
    {
        questionQty: "Câu 41: ",
        question: "Bạn đang lái xe trong khu dân cư, có đông xe qua lại, nếu muốn quay đầu bạn cần làm gì để tránh ùn tắc và đảm bảo an toàn giao thông?",
        answer: ["Đi tiếp đến điểm giao cắt gần nhất hoặc nơi có biển báo cho phép quay đầu xe.",
            "Bấm đèn khẩn cấp và quay đầu xe từ từ bảo đảm an toàn.",
            "Bấm còi liên tục khi quay đầu để cảnh báo các xe khác.",
            "Nhờ một người ra hiệu giao thông trên đường chậm lại trước khi quay đầu."
        ],
        correct: 1,
        suggest:"Giải thích: Chỉ quay đầu xe ở điểm giao cắt hoặc nơi có biển báo cho phép quay đầu."
    },
    {
        questionQty: "Câu 42:",
        question: " Người lái xe không được lùi xe ở những khu vực nào dưới đây?",
        answer: ["Ở khu vực cho phép đỗ xe.",
            "Ở khu vực cấm dừng và trên phần đường dành cho người đi bộ qua đường.",
            "Nơi đường bộ giao nhau, đường bộ giao nhau cùng mức với đường sắt, nơi tầm nhìn bị che khuất, trong hầm đường bộ, đường cao tốc.",
            "Cả ý 2 và ý 3."
        ],
        correct: 4,
        suggest:"Giải thích: Cấm lùi xe ở khu vực cấm dừng và nơi đường bộ giao nhau."
    },
    {
        questionQty: "Câu 43: ",
        question: "Người điều khiển phương tiện giao thông trên đường phố có được dừng xe, đỗ xe trên miệng cống thoát nước, miệng hầm của đường điện thoại, điện cao thế, chỗ dành riêng cho xe chữa cháy lấy nước hay không?",
        answer: ["Được dừng xe, đỗ xe trong trường hợp cần thiết.",
            "Không được dừng xe, đỗ xe.",
            "Được dừng xe, không được đỗ xe."
        ],
        correct: 2,
        suggest:"Giải thích: Không được dừng, đỗ xe trên miệng cống thoát nước."
    },
    {
        questionQty: "Câu 44:",
        question: " Khi xe đã kéo 1 xe hoặc xe đã kéo 1 rơ moóc, bạn có được phép kéo thêm xe (kể cả xe thô sơ) hoặc rơ moóc thứ hai hay không?",
        answer: ["Chỉ được thực hiện trên đường quốc lộ có hai làn xe một chiều.",
            "Chỉ được thực hiện trên đường cao tốc.",
            "Không được thực hiện vào ban ngày.",
            "Không Được Phép"
        ],
        correct: 4,
        suggest:"Giải thích: Xe kéo đã kéo rơ moóc không được kéo thêm xe."
    },
    {
        questionQty: "Câu 45: ",
        question: "Người điều khiển xe mô tô hai bánh, ba bánh, xe gắn máy có được phép sử dụng xe để kéo hoặc đẩy các phương tiện khác khi tham gia giao thông không?",
        answer: ["Được phép.",
            "Nếu phương tiện được kéo, đẩy có khối lượng nhỏ hơn phương tiện của mình.",
            "Tùy trường hợp.",
            "Không được phép"
        ],
        correct: 4,
        suggest:"Giải thích: Xe mô tô không được kéo xe khác."
    },
    {
        questionQty: "Câu 46",
        question: "Khi điều khiển xe mô tô hai bánh, xe mô tô ba bánh, xe gắn máy, những hành vi buông cả hai tay; sử dụng xe để kéo, đẩy xe khác, vật khác; sử dụng chân chống của xe quệt xuống đường khi xe đang chạy có được phép hay không?",
        answer: ["Được phép.",
            "Tùy Trường Hợp",
            "Không Được Phép"
        ],
        correct: 3,
        suggest:"Giải thích: Không được phép."
    },
    {
        questionQty: "Câu 47:",
        question: " Khi điều khiển xe mô tô hai bánh, xe mô tô ba bánh, xe gắn máy, những hành vi nào không được phép?",
        answer: ["Buông cả hai tay; sử dụng xe để kéo, đẩy xe khác, vật khác; sử dụng chân chống của xe để quệt xuống đường khi xe đang chạy.",
            "Buông một tay; sử dụng xe để chở người hoặc hàng hóa; để chân chạm xuống đất khi khởi hành.",
            "Đội mũ bảo hiểm; chạy xe đúng tốc độ quy định và chấp hành đúng quy tắc giao thông đường bộ.",
            "Chở người ngồi sau dưới 16 tuổi."
        ],
        correct: 1,
        suggest:"Giải thích: Buông cả hai tay; sử dụng xe để kéo, đẩy xe khác, vật khác; sử dụng chân chống của xe để quệt xuống đường khi xe đang chạy."
    },
    {
        questionQty: "Câu 48:",
        question: " Người ngồi trên xe mô tô hai bánh, ba bánh, xe gắn máy khi tham gia giao thông có được mang, vác vật cồng kềnh hay không?",
        answer: ["Được mang, vác tùy trường hợp cụ thể.",
            "Không được mang, vác.",
            "Được mang, vác nhưng phải đảm bảo an toàn.",
            "Được mang, vác tùy theo sức khoẻ của bản thân."
        ],
        correct: 2,
        suggest:"Giải thích: Xe mô tô không được mang vác vật cồng kềnh."
    },
    {
        questionQty: "Câu 49: ",
        question: "Người ngồi trên xe mô tô hai bánh, xe mô tô ba bánh, xe gắn máy khi tham gia giao thông có được bám, kéo hoặc đẩy các phương tiện khác không?",
        answer: ["Được phép.",
            "Được bám trong trường hợp phương tiện của mình bị hỏng.",
            "Được kéo, đẩy trong trường hợp phương tiện khác bị hỏng.",
            "Không được phép."
        ],
        correct: 4,
        suggest:"Giải thích: Xe mô tô không được kéo xe khác."
    },
    {
        questionQty: "Câu 50: ",
        question: "Người ngồi trên xe mô tô hai bánh, xe mô tô ba bánh, xe gắn máy khi tham gia giao thông có được sử dụng ô khi trời mưa hay không?",
        answer: ["Được sử dụng",
            "Chỉ người ngồi sau được sử dụng.",
            "Không được sử dụng.",
            "Được sử dụng nếu không có áo mưa"
        ],
        correct: 3,
        suggest:"Giải thích: Khi tham gia giao thông, người ngồi trên xe mô tô hai bánh, xe mô tô ba bánh, xe gắn máy không được sử dụng ô vì dễ gây mất cân bằng và nguy hiểm cho người điều khiển và các phương tiện khác."
    },
    {
        questionQty: "Câu 51:",
        question: " Khi đang lên dốc người ngồi trên xe mô tô có được kéo theo người đang điều khiển xe đạp hay không?",
        answer: ["Chỉ được phép nếu cả hai đội mũ bảo hiểm.",
            "Không được phép.",
            "Chỉ được thực hiện trên đường thật vắng.",
            "Chỉ được phép khi người đi xe đạp đã quá mệt."
        ],
        correct: 2,
        suggest:"Giải thích: Xe mô tô không được kéo xe khác."
    },
    {
        questionQty: "Câu 52: ",
        question: "Hành vi sử dụng xe mô tô để kéo, đẩy xe mô tô khác bị hết xăng đến trạm mua xăng có được phép hay không?",
        answer: ["Chỉ được kéo nếu đã nhìn thấy trạm xăng.",
            "Chỉ được thực hiện trên đường vắng phương tiện cùng tham gia giao thông.",
            "Không được phép.",
        ],
        correct: 3,
        suggest:"Giải thích: Xe mô tô không được kéo xe khác."
    },
    {
        questionQty: "Câu 53:",
        question: " Hành vi vận chuyển đồ vật cồng kềnh bằng xe mô tô, xe gắn máy khi tham gia giao thông có được phép hay không?",
        answer: ["Không được vận chuyển.",
            "Chỉ được vận chuyển khi đã chằng buộc cẩn thận.",
            "Chỉ được vận chuyển vật cồng kềnh trên xe máy nếu khoảng cách về nhà ngắn hơn 2 km."
        ],
        correct: 1,
        suggest:"Giải thích: Xe mô tô không được mang vác vật cồng kềnh."
    },
    {
        questionQty: "Câu 54: ",
        question: "Người đủ bao nhiêu tuổi trở lên thì được điều khiển xe ô tô tải, máy kéo có trọng tải từ 3.500 kg trở lên; xe hạng B2 kéo rơ moóc (FB2)?",
        answer: ["19 tuổi.",
            "21 tuổi.",
            "24 tuổi.",
        ],
        correct: 2,
        suggest:"Giải thích: Độ tuổi lấy bằng theo hạng (cách nhau 3 tuổi): 16: Xe dưới 50cm3; 18: Hạng A, B1, B2; 21: Hạng C, FB; 24: Hạng D, FC; 27: Hạng E, FD."
    },
    {
        questionQty: "Câu 55:",
        question: " Người đủ bao nhiêu tuổi trở lên thì được điều khiển xe mô tô hai bánh, xe mô tô ba bánh có dung tích xi lanh từ 50 cm3 trở lên và các loại xe có kết cấu tương tự; xe ô tô tải, máy kéo có trọng tải dưới 3.500 kg; xe ô tô chở người đến 9 chỗ ngồi?",
        answer: ["16 tuổi.",
            "18 tuổi.",
            "17 tuổi."
        ],
        correct: 2,
        suggest:"Giải thích: Độ tuổi lấy bằng theo hạng (cách nhau 3 tuổi): 16: Xe dưới 50cm3; 18: Hạng A, B1, B2; 21: Hạng C, FB; 24: Hạng D, FC; 27: Hạng E, FD."
    },
    {
        questionQty: "Câu 56:",
        question: " Người lái xe ô tô chở người trên 30 chỗ ngồi (hạng E), lái xe hạng D kéo rơ moóc (FD) phải đủ bao nhiêu tuổi trở lên?",
        answer: ["23 tuổi.",
            "24 tuổi.",
            "27 tuổi.",
            "30 tuổi."
        ],
        correct: 3,
        suggest:" Độ tuổi lấy bằng theo hạng (cách nhau 3 tuổi): 16: Xe dưới 50cm3; 18: Hạng A, B1, B2; 21: Hạng C, FB; 24: Hạng D, FC; 27: Hạng E, FD."
    },
    {
        questionQty: "Câu 57:",
        question: " Tuổi tối đa của người lái xe ô tô chở người trên 30 chỗ ngồi (hạng E) là bao nhiêu tuổi?",
        answer: ["55 tuổi đối với nam và 50 tuổi đối với nữ.",
            "55 tuổi đối với nam và nữ.",
            "60 tuổi đối với nam và 55 tuổi đối với nữ.",
            "45 tuổi đối với nam và 40 tuổi đối với nữ."
        ],
        correct: 1,
        suggest:"Giải thích: Độ tuổi tối đa người lái xe ô tô hạng E: Nam 55 tuổi và nữ 50 tuổi."
    },
    {
        questionQty: "Câu 58:",
        question: " Người lái xe chở người từ 10 đến 30 chỗ ngồi (hạng D), lái xe hạng C kéo rơ moóc (FC) phải đủ bao nhiêu tuổi trở lên?",
        answer: ["23 tuổi.",
            "24 tuổi.",
            "22 tuổi.",
            "19 tuổi."
        ],
        correct: 2,
        suggest:"Giải thích: Độ tuổi lấy bằng theo hạng (cách nhau 3 tuổi): 16: Xe dưới 50cm3; 18: Hạng A, B1, B2; 21: Hạng C, FB; 24: Hạng D, FC; 27: Hạng E, FD."
    },
    {
        questionQty: "Câu 59: ",
        question: "Người đủ 16 tuổi được điều khiển các loại xe nào dưới đây?",
        answer: ["Xe mô tô 2 bánh có dung tích xi-lanh từ 50 cm3 trở lên",
            "Xe gắn máy có dung tích xi-lanh dưới 50 cm3.",
            "Xe ô tô tải dưới 3.500 kg; xe chở người đến 9 chỗ ngồi.",
            "Tất cả các ý nêu trên."
        ],
        correct: 2,
        suggest:"Giải thích: Độ tuổi lấy bằng theo hạng (cách nhau 3 tuổi): 16: Xe dưới 50cm3; 18: Hạng A, B1, B2; 21: Hạng C, FB; 24: Hạng D, FC; 27: Hạng E, FD."
    },
    {
        questionQty: "Câu 60: ",
        question: "Người có Giấy phép lái xe mô tô hạng A1 không được phép điều khiển loại xe nào dưới đây?",
        answer: ["Xe mô tô có dung tích xi-lanh 125 cm3.",
            "Xe mô tô có dung tích xi-lanh từ 175 cm3 trở lên.",
            "Xe mô tô có dung tích xi-lanh 100 cm3."
        ],
        correct: 2,
        suggest:"Giải thích: A1 mô tô dưới 175 cm3 và xe 3 bánh của người khuyết tật; A2 mô tô 175 cm3 trở lên; A3 xe 3 bánh"
    },
    {
        questionQty: "Câu 61:",
        question: " Người có Giấy phép lái xe mô tô hạng A1 được phép điều khiển loại xe nào dưới đây?",
        answer: ["Xe mô tô hai bánh có dung tích xi-lanh từ 50 cm3 đến dưới 175 cm3.",
            "Xe mô tô ba bánh dùng cho người khuyết tật.",
            "Cả ý 1 và ý 2"
        ],
        correct: 3,
        suggest:"Giải thích: A1 mô tô dưới 175 cm3 và xe 3 bánh của người khuyết tật; A2 mô tô 175 cm3 trở lên; A3 xe 3 bánh."
    },
    {
        questionQty: "Câu 62:",
        question: " Người có Giấy phép lái xe mô tô hạng A2 được phép điều khiển loại xe nào dưới đây?",
        answer: ["Xe mô tô ba bánh.",
            "Xe mô tô hai bánh có dung tích xi-lanh từ 175 cm3 trở lên và các loại xe quy định cho Giấy phép lái xe hạng A1.",
            "Các loại máy kéo nhỏ có trọng tải đến 1.000 kg."
        ],
        correct: 2,
        suggest:"Giải thích: A1 mô tô dưới 175 cm3 và xe 3 bánh của người khuyết tật; A2 mô tô 175 cm3 trở lên; A3 xe 3 bánh."
    },
    {
        questionQty: "Câu 63:",
        question: " Người có Giấy phép lái xe mô tô hạng A3 được phép điều khiển loại xe nào dưới đây?",
        answer: ["Xe mô tô ba bánh.",
            "Xe mô tô hai bánh có dung tích xi-lanh từ 175 cm3 trở lên.",
            "Các loại máy kéo nhỏ có trọng tải đến 1.000 kg."
        ],
        correct: 1,
        suggest:"Giải thích: A1 mô tô dưới 175 cm3 và xe 3 bánh của người khuyết tật; A2 mô tô 175 cm3 trở lên; A3 xe 3 bánh."
    },
    {
        questionQty: "Câu 64: ",
        question: "Người có Giấy phép lái xe hạng B1 số tự động được điều khiển loại xe nào?",
        answer: ["Ô tô số tự động chở người đến 9 chỗ ngồi, kể cả chỗ ngồi cho người lái xe; ô tô tải, kể cả ô tô tải chuyên dùng số tự động có trọng tải thiết kế dưới 3.500 kg; ô tô dùng cho người khuyết tật. Không được hành nghề lái xe.",
            "Ô tô số tự động chở người đến 9 chỗ ngồi, kể cả chỗ ngồi cho người lái xe; ô tô tải, kể cả ô tô tải chuyên dùng số tự động có trọng tải thiết kế dưới 3.500 kg; ô tô dùng cho người khuyết tật. Được hành nghề lái xe kinh doanh vận tải.",
            "Ô tô chở người đến 9 chỗ ngồi, kể cả chỗ ngồi cho người lái xe; ô tô tải, kể cả ô tô tải chuyên dùng có trọng tải thiết kế dưới 3.500 kg; ô tô dùng cho người khuyết tật."
        ],
        correct: 1,
        suggest:"Giải thích: B1, B2 đến 9 chỗ ngồi, xe tải dưới 3.500 kg; B1 không hành nghề lái xe."
    },
    {
        questionQty: "Câu 65:",
        question: " Người có Giấy phép lái xe hạng B1 được điều khiển loại xe nào?",
        answer: ["Ô tô chở người đến 9 chỗ ngồi, kể cả chỗ ngồi cho người lái xe; ô tô tải, kể cả ô tô tải chuyên dùng có trọng tải thiết kế dưới 3.500 kg; máy kéo kéo một rơ moóc có trọng tải thiết kế dưới 3.500 kg. Được hành nghề lái xe",
            "Ô tô chở người đến 9 chỗ ngồi, kể cả chỗ ngồi cho người lái xe; ô tô tải, kể cả ô tô tải chuyên dùng có trọng tải thiết kế dưới 3.500 kg; máy kéo kéo một rơ moóc có trọng tải thiết kế dưới 3.500 kg. Không được hành nghề lái xe.",
            "Ô tô số tự động chở người đến 9 chỗ ngồi, kể cả chỗ ngồi cho người lái xe; ô tô tải, kể cả ô tô tải chuyên dùng số tự động có trọng tải thiết kế dưới 3.500 kg; ô tô dùng cho người khuyết tật."
        ],
        correct: 2,
        suggest:"Giải thích: B1, B2 đến 9 chỗ ngồi, xe tải dưới 3.500 kg; B1 không hành nghề lái xe."
    },
    {
        questionQty: "Câu 66:",
        question: " Người có Giấy phép lái xe hạng B2 được điều khiển loại xe nào dưới đây?",
        answer: ["Xe ô tô chở người trên 9 chỗ ngồi; xe ô tô tải, máy kéo có trọng tải trên 3.500 kg.",
            "Xe ô tô chở người đến 9 chỗ ngồi; xe ô tô tải, máy kéo có trọng tải dưới 3.500 kg.",
            "Xe ô tô chở người từ 10 đến 30 chỗ ngồi; xe ô tô tải, máy kéo có trọng tải trên 3.500 kg."
        ],
        correct: 2,
        suggest:"Giải thích: B2 đến 9 chỗ ngồi, xe tải dưới 3.500 kg."
    },
    {
        questionQty: "Câu 67: ",
        question: "Người có Giấy phép lái xe hạng C được điều khiển loại xe nào dưới đây?",
        answer: ["Xe ô tô chở người trên 9 chỗ ngồi; xe ô tô tải, máy kéo có trọng tải trên 3.500 kg",
            "Xe ô tô chở người từ 10 đến 30 chỗ ngồi; xe ô tô tải, máy kéo có trọng tải trên 3.500 kg.",
            "Xe ô tô chở người đến 9 chỗ ngồi; xe ô tô tải, máy kéo có trọng tải trên 3.500 kg."
        ],
        correct: 3,
        suggest:"Giải thích: C đến 9 chỗ ngồi, xe trên 3.500 kg."
    },
    {
        questionQty: "Câu 68: ",
        question: "Người có Giấy phép lái xe hạng D được điều khiển loại xe nào dưới đây?",
        answer: ["Ô tô chở người đến 30 chỗ ngồi, kể cả chỗ ngồi cho người lái xe; xe ô tô tải, máy kéo có trọng tải trên 3.500 kg.",
            "Xe ô tô chở người trên 30 chỗ ngồi; xe ô tô tải, máy kéo có trọng tải trên 3.500 kg.",
            "Xe kéo rơ moóc, ô tô đầu kéo kéo sơ mi rơ moóc và được điều khiển các loại xe quy định cho Giấy phép lái xe hạng B1, B2, C và FB2."
        ],
        correct: 1,
        suggest:"Giải thích: D chở đến 30 người."
    },
    {
        questionQty: "Câu 69:",
        question: " Người có Giấy phép lái xe hạng E được điều khiển loại xe nào dưới đây?",
        answer: ["Xe kéo rơ moóc, ô tô đầu kéo kéo sơ mi rơ moóc và được điều khiển các loại xe quy định cho Giấy phép lái xe hạng B1, B2, C và FB2.",
            "Ô tô chở người trên 30 chỗ ngồi; xe ô tô tải, máy kéo có trọng tải trên 3.500 kg.",
            "Xe kéo rơ moóc và được điều khiển các loại xe: ô tô chở khách nối toa và các loại xe quy định cho Giấy phép lái xe hạng B1, B2, C, D, FB2, FD."
        ],
        correct: 2,
        suggest:"Giải thích: E chở trên 30 người."
    },
    {
        questionQty: "Câu 70: ",
        question: "Người có Giấy phép lái xe hạng FC được điều khiển loại xe nào dưới đây?",
        answer: ["Các loại xe được quy định tại Giấy phép lái xe hạng C có kéo rơ moóc, ô tô đầu kéo kéo sơ mi rơ moóc, ô tô chở khách nối toa và được điều khiển các loại xe quy định cho Giấy phép lái xe hạng B1, B2 và FB2.",
            "Các loại xe được quy định tại Giấy phép lái xe hạng C có kéo rơ moóc, ô tô đầu kéo kéo sơ mi rơ moóc và được điều khiển các loại xe quy định cho Giấy phép lái xe hạng B1, B2, C và FB2.",
            "Mô tô hai bánh, các loại xe được quy định tại Giấy phép lái xe hạng C có kéo rơ moóc, ô tô đầu kéo kéo sơ mi rơ moóc và được điều khiển các loại xe quy định cho Giấy phép lái xe hạng B1, B2, C và FB2.",
            "Tất cả các loại xe nêu trên."
        ],
        correct: 2,
        suggest:"Giải thích: FC: C + kéo (ô tô đầu kéo, kéo sơ mi rơ moóc); FE: E + kéo (ô tô chở khách nối toa)."
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
            score++ ;
            ansTotal.textContent = `Điểm Của Bạn Là: ${score}`;
            feedbackEl.textContent = "✅ Chính xác!" ;
            e.target.style.backgroundColor = "lightgreen";

        } else {
            score--;
            ansTotal.textContent =`Điểm Của Bạn Là: ${score} ` ;

            feedbackEl.textContent = `❌ Sai rồi!`;
            e.target.style.backgroundColor = "tomato";
           
        }
        

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
// chon cau hoi
const quesBtnList = document.querySelectorAll(".ques__qty--btn");
for (let i = 0; i < quesBtnList.length; i++) {
    currentQuestion = 0;
     
    quesBtnList[i].addEventListener("click", function () {
       currentQuestion += i;
        loadQuestion()
    currentQuestion = 0;

    })
}