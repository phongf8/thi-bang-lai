const originalQuestions = 
    [
    {
        "image": "",
        "no": 1,
        "index": 1,
        "text": "Phần của đường bộ được sử dụng cho các phương tiện giao thông qua lại là gì?",
        "tip": "Phần đường xe chạy là phần của đường bộ được sử dụng cho phương tiện giao thông qua lại.",
        "answers": [
            "Phần mặt đường và lề đường.",
            "Phần đường xe chạy.",
            "Phần đường xe cơ giới.",
        ],
        correct:2
    },
    {
        "image": "",
        "no": 2,
        "index": 2,
        "text": "\"Làn đường\" là gì?",
        "tip": "Làn đường có bề rộng đủ cho xe chạy an toàn.",
        "answers": [
            "Là một phần của phần đường xe chạy được chia theo chiều dọc của đường, sử dụng cho xe chạy.",
            "Là một phần của phần đường xe chạy được chia theo chiều dọc của đường, có bề rộng đủ cho xe chạy an toàn.",
            "Là đường cho xe ô tô chạy, dừng, đỗ an toàn.",
        ],
        correct:2
    },
    {
        "image": "",
        "no": 3,
        "index": 3,
        "text": "Khái niệm \"Khổ giới hạn đường bộ\" được hiểu như thế nào là đúng?",
        "tip": "Khổ giới hạn đường bộ có giới hạn về chiều cao, chiều rộng.",
        "answers": [
            "Là khoảng trống có kích thước giới hạn về chiều cao, chiều rộng của đường, cầu, bến phà, hầm đường bộ để các xe kể cả hàng hóa xếp trên xe đi qua được an toàn.",
            "Là khoảng trống có kích thước giới hạn về chiều rộng của đường, cầu, bến phà, hầm trên đường bộ để các xe kể cả hàng hóa xếp trên xe đi qua được an toàn.",
            "Là khoảng trống có kích thước giới hạn về chiều cao của cầu, bến phà, hầm trên đường bộ để các xe đi qua được an toàn.",
        ],
        "correct":1
    },
    {
        "image": "",
        "no": 4,
        "index": 4,
        "text": "Trong các khái niệm dưới đây, \"dải phân cách\" được hiểu như thế nào là đúng?",
        "tip": "Dải phân cách phân chia mặt đường thành hai chiều xe chạy riêng biệt.",
        "answers": [
            "Là bộ phận của đường để ngăn cách không cho các loại xe vào những nơi không được phép.",
            "Là bộ phận của đường để phân tách phần đường xe chạy và hành lang an toàn giao thông.",
            "Là bộ phận của đường để phân chia mặt đường thành hai chiều xe chạy riêng biệt hoặc để phân chia phần đường của xe cơ giới và xe thô sơ.",
        ],
        "correct":3
    },
    {
        "image": "",
        "no": 5,
        "index": 5,
        "text": "\"Dải phân cách\" trên đường bộ gồm những loại nào?",
        "tip": "Dải phân cách gồm cố định và di động.",
        "answers": [
            "Dải phân cách gồm loại cố định và loại di động.",
            "Dải phân cách gồm tường chống ồn, hộ lan cứng và hộ lan mềm.",
            "Dải phân cách gồm giá long môn và biển báo hiệu đường bộ.",
        ],
        "correct":1
    },
    {
        "image": "",
        "no": 6,
        "index": 6,
        "text": "Người lái xe được hiểu như thế nào trong các khái niệm dưới đây?",
        "tip": "Người lái xe là người điều khiển xe cơ giới.",
        "answers": [
            "Là người điều khiển xe cơ giới",
            "Là người điều khiển xe thô sơ.",
            "Là người điều khiển xe có súc vật kéo.",
        ],
        "correct":1
    },
    {
        "image": "",
        "no": 7,
        "index": 7,
        "text": "Đường mà trên đó phương tiện tham gia giao thông được các phương tiện giao thông đến từ hướng khác nhường đường khi qua nơi đường giao nhau, được cắm biển báo hiệu đường ưu tiên là loại đường gì?",
        "tip": "Đường ưu tiên được nhường đường khi qua nơi giao nhau.",
        "answers": [
            "Đường không ưu tiên.",
            "Đường tỉnh lộ.",
            "Đường quốc lộ.",
            "Đường ưu tiên.",
        ],
        "correct":4
    },
    {
        "image": "",
        "no": 8,
        "index": 8,
        "text": "Khái niệm \"phương tiện giao thông cơ giới đường bộ\" được hiểu thế nào là đúng?",
        "tip": "Phương tiện giao thông cơ giới không có xe máy chuyên dùng.",
        "answers": [
            "Gồm xe ô tô; máy kéo; xe mô tô hai bánh; xe mô tô ba bánh; xe gắn máy; xe cơ giới dùng cho người khuyết tật và xe máy chuyên dùng.",
            "Gồm xe ô tô; máy kéo; rơ moóc hoặc sơ mi rơ moóc được kéo bởi xe ô tô, máy kéo; xe mô tô hai bánh; xe mô tô ba bánh, xe gắn máy (kể cả xe máy điện) và các loại xe tương tự.",
        ],
        "correct":2
    },
    {
        "image": "",
        "no": 9,
        "index": 9,
        "text": "Khái niệm \"phương tiện giao thông thô sơ đường bộ\" được hiểu thế nào là đúng?",
        "tip": "Phương tiện giao thông thô sơ không có xe máy chuyên dùng; xe ô tô.",
        "answers": [
            "Gồm xe đạp (kể cả xe đạp máy, xe đạp điện), xe xích lô, xe lăn dùng cho người khuyết tật, xe súc vật kéo và các loại xe tương tự.",
            "Gồm xe đạp (kể cả xe đạp máy, xe đạp điện), xe gắn máy, xe cơ giới dùng cho người khuyết tật và xe máy chuyên dùng.",
            "Gồm xe ô tô, máy kéo, rơ moóc hoặc sơ mi rơ moóc được kéo bởi xe ô tô, máy kéo.",
        ],
        "correct":1
    },
    {
        "image": "",
        "no": 10,
        "index": 10,
        "text": "\"Phương tiện tham gia giao thông đường bộ\" gồm những loại nào?",
        "tip": "Phương tiện giao thông gồm tất cả các loại phương tiện.",
        "answers": [
            "Phương tiện giao thông cơ giới đường bộ.",
            "Phương tiện giao thông thô sơ đường bộ và xe máy chuyên dùng.",
            "Cả ý 1 và ý 2.",
        ],
        "correct":3
    },
    {
        "image": "",
        "no": 11,
        "index": 11,
        "text": "\"Người tham gia giao thông đường bộ\" gồm những đối tượng nào?",
        "tip": "Người tham gia giao thông gồm người sử dụng phương tiện và người đi bộ.",
        "answers": [
            "Người điều khiển, người sử dụng phương tiện tham gia giao thông đường bộ.",
            "Người điều khiển, dẫn dắt súc vật; người đi bộ trên đường bộ.",
            "Cả ý 1 và ý 2.",
        ],
        "correct":3
    },
    {
        "image": "",
        "no": 12,
        "index": 12,
        "text": "\"Người điều khiển phương tiện tham gia giao thông đường bộ\" gồm những đối tượng nào dưới đây?",
        "tip": "Người điều khiển phương tiện gồm cả xe cơ giới và xe máy chuyên dùng.",
        "answers": [
            "Người điều khiển xe cơ giới, người điều khiển xe thô sơ.",
            "Người điều khiển xe máy chuyên dùng tham gia giao thông đường bộ.",
            "Cả ý 1 và ý 2",
        ],
        "correct":3
    },
    {
        "image": "",
        "no": 13,
        "index": 13,
        "text": "Khái niệm \"người điều khiển giao thông\" được hiểu như thế nào là đúng?",
        "tip": "Người điều khiển giao thông là cảnh sát giao thông.",
        "answers": [
            "Là người điều khiển phương tiện tham gia giao thông tại nơi thi công, nơi ùn tắc giao thông, ở bến phà, tại cầu đường bộ đi chung với đường sắt.",
            "Là cảnh sát giao thông, người được giao nhiệm vụ hướng dẫn giao thông tại nơi thi công, nơi ùn tắc giao thông, ở bến phà, tại cầu đường bộ đi chung với đường sắt.",
            "Là người tham gia giao thông tại nơi thi công, nơi ùn tắc giao thông, ở bến phà, tại cầu đường bộ đi chung với đường sắt.",
        ],
        "correct":2
    },
    {
        "image": "",
        "no": 14,
        "index": 14,
        "text": "Trong các khái niệm dưới đây khái niệm \"dừng xe\" được hiểu như thế nào là đúng?",
        "tip": "Dừng xe là đứng yên tạm thời.",
        "answers": [
            "Là trạng thái đứng yên của phương tiện giao thông không giới hạn thời gian để cho người lên, xuống phương tiện, xếp dỡ hàng hóa hoặc thực hiện công việc khác.",
            "Là trạng thái đứng yên tạm thời của phương tiện giao thông trong một khoảng thời gian cần thiết đủ để cho người lên, xuống phương tiện, xếp dỡ hàng hóa hoặc thực hiện công việc khác.",
            "Là trạng thái đứng yên của phương tiện giao thông không giới hạn thời gian giữa 02 lần vận chuyển hàng hóa hoặc hành khách.",
        ],
        "correct":2
    },
    {
        "image": "",
        "no": 15,
        "index": 15,
        "text": "Khái niệm \"đỗ xe\" được hiểu như thế nào là đúng quy tắc giao thông?",
        "tip": "Đỗ xe là đứng yên không giới hạn thời gian.",
        "answers": [
            "Là trạng thái đứng yên của phương tiện giao thông có giới hạn trong một khoảng thời gian cần thiết đủ để cho người lên, xuống phương tiện đó, xếp dỡ hàng hóa hoặc thực hiện công việc khác.",
            "Là trạng thái đứng yên của phương tiện giao thông không giới hạn thời gian.",
        ],
        "correct":2
    },
    {
        "image": "",
        "no": 16,
        "index": 16,
        "text": "Khái niệm \"đường cao tốc\" được hiểu như thế nào là đúng?",
        "tip": "Đường cao tốc gồm tất cả các ý.",
        "answers": [
            "Đường dành riêng cho xe ôtô và một số loại xe chuyên dùng được phép đi vào theo quy định của Luật Giao thông đường bộ.",
            "Có dải phân cách phân chia đường cho xe chạy hai chiều riêng biệt mà dải phân cách này xe không đi được lên trên; không giao nhau cùng mức với một hoặc một số đường khác.",
            "Được bố trí đầy đủ trang thiết bị phục vụ, bảo đảm giao thông liên tục, an toàn, rút ngắn thời gian hành trình và chỉ cho xe ra, vào ở những điểm nhất định.",
            "Tất cả các ý trên.",
        ],
        "correct":4
    },
    {
        "image": "",
        "no": 17,
        "index": 17,
        "text": "Hành vi nào dưới đây bị nghiêm cấm?",
        "tip": "Hành vi làm hỏng cọc tiêu bị nghiêm cấm.",
        "answers": [
            "Đỗ xe trên đường phố",
            "Sử dụng xe đạp đi trên các tuyến quốc lộ có tốc độ cao.",
            "Làm hỏng (cố ý) cọc tiêu, gương cầu, dải phân cách.",
            "Sử dụng còi và quay đầu xe trong khu dân cư.",
        ],
        "correct":3
    },
    {
        "image": "",
        "no": 18,
        "index": 18,
        "text": "Hành vi đưa xe cơ giới, xe máy chuyên dùng không bảo đảm tiêu chuẩn an toàn kỹ thuật và bảo vệ môi trường vào tham gia giao thông đường bộ có bị nghiêm cấm hay không?",
        "tip": "Hành vi đưa xe không đảm bảo an toàn kỹ thuật bị nghiêm cấm.",
        "answers": [
            "Không nghiêm cấm.",
            "Bị nghiêm cấm.",
            "Bị nghiêm cấm tùy theo các tuyến đường.",
            "Bị nghiêm cấm tuỳ theo loại xe.",
        ],
        "correct":2
    },
    {
        "image": "",
        "no": 19,
        "index": 19,
        "text": "Cuộc đua xe chỉ được thực hiện khi nào?",
        "tip": "Cuộc đua xe cần cấp phép.",
        "answers": [
            "Diễn ra trên đường phố không có người qua lại.",
            "Được người dân ủng hộ.",
            "Được cơ quan có thẩm quyền cấp phép.",
        ],
        "correct":3
    },
    {
        "image": "",
        "no": 20,
        "index": 20,
        "text": "Người điều khiển phương tiện giao thông đường bộ mà trong cơ thể có chất ma túy có bị nghiêm cấm hay không?",
        "tip": "Có ma túy bị nghiêm cấm.",
        "answers": [
            "Bị nghiêm cấm.",
            "Không bị nghiêm cấm.",
            "Không bị nghiêm cấm, nếu có chất ma túy ở mức nhẹ, có thể điều khiển phương tiện tham gia giao thông.",
        ],
        "correct":1
    },
    {
        "image": "",
        "no": 21,
        "index": 21,
        "text": "Việc lái xe mô tô, ô tô, máy kéo ngay sau khi uống rượu, bia có được phép hay không?",
        "tip": "Uống rượu bia không được lái xe,",
        "answers": [
            "Không được phép.",
            "Chỉ được lái ở tốc độ chậm và quãng đường ngắn.",
            "Chỉ được lái nếu trong cơ thể có nồng độ cồn thấp.",
        ],
        "correct":1
    },
    {
        "image": "",
        "no": 22,
        "index": 22,
        "text": "Người điều khiển xe ô tô, mô tô, máy kéo trên đường mà trong máu hoặc hơi thở có nồng độ cồn có bị nghiêm cấm không?",
        "tip": "Trong máu hoặc hơi thở có nồng độ cồn bị nghiêm cấm.",
        "answers": [
            "Bị nghiêm cấm.",
            "Không bị nghiêm cấm.",
            "Không bị nghiêm cấm, nếu nồng độ cồn trong máu ở mức nhẹ, có thể điều khiển phương tiện tham gia giao thông.",
        ],
        "correct":1
    },
    {
        "image": "",
        "no": 23,
        "index": 23,
        "text": "Sử dụng rượu, bia khi lái xe, nếu bị phát hiện thì bị xử lý như thế nào?",
        "tip": "Sử dụng rượu, bia khi lái xe bị phạt hành chính hoặc xử lý hình sự.",
        "answers": [
            "Chỉ bị nhắc nhở.",
            "Bị xử phạt hành chính hoặc có thể bị xử lý hình sự tùy theo mức độ vi phạm.",
            "Không bị xử lý hình sự.",
        ],
        "correct":2
    },
    {
        "image": "",
        "no": 24,
        "index": 24,
        "text": "Theo Luật phòng chống tác hại của rượu, bia, đối tượng nào dưới đây bị cấm sử dụng rượu, bia khi tham gia giao thông?",
        "tip": "Người điều khiển bị cấm sử dụng rượu, bia khi tham gia giao thông.",
        "answers": [
            "Người điều khiển: Xe ô tô, xe mô tô, xe đạp, xe gắn máy.",
            "Người ngồi phía sau người điều khiển xe cơ giới.",
            "Người đi bộ.",
            "Cả ý 1 và ý 2.",
        ],
        "correct":1
    },
    {
        "image": "",
        "no": 25,
        "index": 25,
        "text": "Hành vi giao xe cơ giới, xe máy chuyên dùng cho người không đủ điều kiện để điều khiển xe tham gia giao thông có được phép hay không?",
        "tip": "Không được phép giao xe cho người không đủ điều kiện tham gia giao thông.",
        "answers": [
            "Chỉ được thực hiện nếu đã hướng dẫn đầy đủ.",
            "Không được phép.",
            "Được phép tùy từng trường hợp.",
            "Chỉ được phép thực hiện với thành viên trong gia đình.",
        ],
        "correct":2
    },
    {
        "image": "",
        "no": 26,
        "index": 26,
        "text": "Hành vi điều khiển xe cơ giới chạy quá tốc độ quy định, giành đường, vượt ẩu có bị nghiêm cấm hay không?",
        "tip": "",
        "answers": [
            "Bị nghiêm cấm tùy từng trường hợp.",
            "Không bị nghiêm cấm.",
            "Bị nghiêm cấm.",
        ],
        "correct":3
    },
    {
        "image": "",
        "no": 27,
        "index": 27,
        "text": "Khi lái xe trên đường, người lái xe cần quan sát và bảo đảm tốc độ phương tiện như thế nào?",
        "tip": "",
        "answers": [
            "Chỉ lớn hơn tốc độ tối đa cho phép khi đường vắng.",
            "Chỉ lớn hơn tốc độ tối đa cho phép vào ban đêm.",
            "Không vượt quá tốc độ cho phép.",
        ],
        "correct":3
    },
    {
        "image": "",
        "no": 28,
        "index": 28,
        "text": "Phương tiện giao thông đường bộ di chuyển với tốc độ thấp hơn phải đi như thế nào?",
        "tip": "Di chuyển tốc độ thấp hơn đi về phía bên phải.",
        "answers": [
            "Đi về phía bên trái.",
            "Đi về phía bên phải.",
            "Đi ở giữa.",
        ],
        "correct":2
    },
    {
        "image": "",
        "no": 29,
        "index": 29,
        "text": "Trên đường có nhiều làn đường, khi điều khiển phương tiện ở tốc độ chậm bạn phải đi ở làn đường nào?",
        "tip": "Tốc độ chậm đi ở làn bên phải trong cùng.",
        "answers": [
            "Đi ở làn bên phải trong cùng.",
            "Đi ở làn phía bên trái.",
            "Đi ở làn giữa.",
            "Đi ở bất cứ làn nào nhưng phải bấm đèn cảnh báo nguy hiểm để báo hiệu cho các phương tiện khác.",
        ],
        "correct":1
    },
    {
        "image": "",
        "no": 30,
        "index": 30,
        "text": "Hành vi vượt xe tại các vị trí có tầm nhìn hạn chế, đường vòng, đầu dốc có bị nghiêm cấm hay không?",
        "tip": "",
        "answers": [
            "Không bị nghiêm cấm.",
            "Không bị nghiêm cấm khi rất vội.",
            "Bị nghiêm cấm.",
            "Không bị nghiêm cấm khi khẩn cấp.",
        ],
        "correct":3
    },
    {
        "image": "",
        "no": 31,
        "index": 31,
        "text": "Khi lái xe trong khu đô thị và đông dân cư trừ các khu vực có biển cấm sử dụng còi, người lái xe được sử dụng còi như thế nào trong các trường hợp dưới đây?",
        "tip": "Chỉ sử dụng còi từ 5 giờ sáng đến 22 giờ tối.",
        "answers": [
            "Từ 22 giờ đêm đến 5 giờ sáng.",
            "Từ 5 giờ sáng đến 22 giờ tối.",
            "Từ 23 giờ đêm đến 5 giờ sáng hôm sau.",
        ],
        "correct":2
    },
    {
        "image": "",
        "no": 32,
        "index": 32,
        "text": "Người lái xe sử dụng đèn như thế nào khi lái xe trong khu đô thị và đông dân cư vào ban đêm?",
        "tip": "Trong đô thị sử dụng đèn chiếu gần.",
        "answers": [
            "Bất cứ đèn nào miễn là mắt nhìn rõ phía trước.",
            "Chỉ bật đèn chiếu xa (đèn pha) khi không nhìn rõ đường.",
            "Đèn chiếu xa (đèn pha) khi đường vắng, đèn pha chiếu gần (đèn cốt) khi có xe đi ngược chiều.",
            "Đèn chiếu gần (đèn cốt).",
        ],
        "correct":4
    },
    {
        "image": "",
        "no": 33,
        "index": 33,
        "text": "Hành vi lắp đặt, sử dụng còi, đèn không đúng thiết kế của nhà sản xuất đối với từng loại xe cơ giới có được phép hay không?",
        "tip": "Không được phép lắp đặt còi đèn không đúng thiết kế.",
        "answers": [
            "Được phép.",
            "Không được phép.",
            "Được phép tùy từng trường hợp.",
        ],
        "correct":2
    },
    {
        "image": "",
        "no": 34,
        "index": 34,
        "text": "Trong trường hợp đặc biệt, để được lắp đặt, sử dụng còi, đèn khác thiết kế của nhà sản xuất đối với từng loại xe cơ giới bạn phải đảm bảo yêu cầu nào dưới đây?",
        "tip": "Lắp đặt còi đèn không đúng thiết kế phải được chấp thuận của cơ quan có thẩm quyền.",
        "answers": [
            "Phải đảm bảo phụ tùng do đúng nhà sản xuất đó cung cấp.",
            "Phải được chấp thuận của cơ quan có thẩm quyền.",
            "Phải là xe đăng ký và hoạt động tại các khu vực có địa hình phức tạp.",
        ],
        "correct":2
    },
    {
        "image": "",
        "no": 35,
        "index": 35,
        "text": "Việc sản xuất, mua bán, sử dụng biển số xe cơ giới, xe máy chuyên dùng được quy định như thế nào trong Luật Giao thông đường bộ?",
        "tip": "",
        "answers": [
            "Được phép sản xuất, sử dụng khi bị mất biển số.",
            "Được phép mua bán, sử dụng khi bị mất biển số.",
            "Nghiêm cấm sản xuất, mua bán, sử dụng trái phép.",
        ],
        "correct":3
    },
    {
        "image": "",
        "no": 36,
        "index": 36,
        "text": "Người lái xe không được vượt xe khác khi gặp trường hợp nào ghi ở dưới đây?",
        "tip": "Không được vượt trên cầu hẹp có một làn xe.",
        "answers": [
            "Trên cầu hẹp có một làn xe. Nơi đường giao nhau, đường bộ giao nhau cùng mức với đường sắt; xe được quyền ưu tiên đang phát tín hiệu ưu tiên đi làm nhiệm vụ.",
            "Trên cầu có từ 02 làn xe trở lên; nơi đường bộ giao nhau không cùng mức với đường sắt; xe được quyền ưu tiên đang đi phía trước nhưng không phát tín hiệu ưu tiên.",
            "Trên đường có 2 làn đường được phân chia làn bằng vạch kẻ nét đứt.",
        ],
        "correct":1
    },
    {
        "image": "",
        "no": 37,
        "index": 37,
        "text": "Ở phần đường dành cho người đi bộ qua đường, trên cầu, đầu cầu, đường cao tốc, đường hẹp, đường dốc, tại nơi đường bộ giao nhau cùng mức với đường sắt có được quay đầu xe hay không?",
        "tip": "Không được phép quay đầu xe ở phần đường dành cho người đi bộ qua đường.",
        "answers": [
            "Được phép.",
            "Không được phép.",
            "Tùy từng trường hợp.",
        ],
        "correct":2
    },
    {
        "image": "",
        "no": 38,
        "index": 38,
        "text": "Bạn đang lái xe phía trước có một xe cảnh sát giao thông không phát tín hiệu ưu tiên bạn có được phép vượt hay không?",
        "tip": "Được vượt khi xe không phát tín hiệu ưu tiên.",
        "answers": [
            "Không được vượt.",
            "Được vượt khi đang đi trên cầu.",
            "Được phép vượt khi đi qua nơi giao nhau có ít phương tiện cùng tham gia giao thông.",
            "Được vượt khi đảm bảo an toàn.",
        ],
        "correct":4
    },
    {
        "image": "",
        "no": 39,
        "index": 39,
        "text": "Bạn đang lái xe phía trước có một xe cứu thương đang phát tín hiệu ưu tiên bạn có được phép vượt hay không?",
        "tip": "Không được vượt khi đang phát tín hiệu ưu tiên.",
        "answers": [
            "Không được vượt.",
            "Được vượt khi đang đi trên cầu.",
            "Được phép vượt khi đi qua nơi giao nhau có ít phương tiện cùng tham gia giao thông.",
            "Được vượt khi đảm bảo an toàn.",
        ],
        "correct":1
    },
    {
        "image": "",
        "no": 40,
        "index": 40,
        "text": "Người lái xe không được quay đầu xe trong các trường hợp nào dưới đây?",
        "tip": "Không được phép quay đầu xe ở phần đường dành cho người đi bộ qua đường.",
        "answers": [
            "Ở phần đường dành cho người đi bộ qua đường, trên cầu, đầu cầu, đường cao tốc, đường hẹp, đường dốc, tại nơi đường bộ giao nhau cùng mức với đường sắt.",
            "Ở phía trước hoặc phía sau của phần đường dành cho người đi bộ qua đường, trên đường quốc lộ, tại nơi đường bộ giao nhau không cùng mức với đường sắt.",
            "Cả ý 1 và ý 2.",
        ],
        "correct":1
    },
    {
        "image": "",
        "no": 41,
        "index": 41,
        "text": "Bạn đang lái xe trong khu dân cư, có đông xe qua lại, nếu muốn quay đầu xe bạn cần làm gì để tránh ùn tắc và đảm bảo an toàn giao thông?",
        "tip": "Chỉ quay đầu xe ở điểm giao cắt hoặc nơi có biển báo cho phép quay đầu.",
        "answers": [
            "Đi tiếp đến điểm giao cắt gần nhất hoặc nơi có biển báo cho phép quay đầu xe.",
            "Bấm đèn khẩn cấp và quay đầu xe từ từ bảo đảm an toàn.",
            "Bấm còi liên tục khi quay đầu xe để cảnh báo các xe khác.",
            "Nhờ một người ra hiệu giao thông trên đường chậm lại trước khi quay đầu.",
        ],
        "correct":1
    },
    {
        "image": "",
        "no": 42,
        "index": 42,
        "text": "Người lái xe không được lùi xe ở những khu vực nào dưới đây?",
        "tip": "Cấm lùi xe ở khu vực cấm dừng và nơi đường bộ giao nhau.",
        "answers": [
            "Ở khu vực cho phép đỗ xe.",
            "Ở khu vực cấm dừng và trên phần đường dành cho người đi bộ qua đường.",
            "Nơi đường bộ giao nhau, đường bộ giao nhau cùng mức với đường sắt, nơi tầm nhìn bị che khuất, trong hầm đường bộ, đường cao tốc.",
            "Cả ý 2 và ý 3.",
        ],
        "correct":4
    },
    {
        "image": "",
        "no": 43,
        "index": 43,
        "text": "Người điều khiển phương tiện giao thông trên đường phố có được dừng xe, đỗ xe trên miệng cống thoát nước, miệng hầm của đường điện thoại, điện cao thế, chỗ dành riêng cho xe chữa cháy lấy nước hay không?",
        "tip": "Không được dừng, đỗ xe trên miệng cống thoát nước.",
        "answers": [
            "Được dừng xe, đỗ xe trong trường hợp cần thiết.",
            "Không được dừng xe, đỗ xe.",
            "Được dừng xe, không được đỗ xe.",
        ],
        "correct":2
    },
    {
        "image": "",
        "no": 44,
        "index": 44,
        "text": "Khi xe đã kéo 1 xe hoặc xe đã kéo 1 rơ moóc, bạn có được phép kéo thêm xe (kể cả xe thô sơ) hoặc rơ moóc thứ hai hay không?",
        "tip": "Xe kéo đã kéo rơ moóc không được kéo thêm xe.",
        "answers": [
            "Chỉ được thực hiện trên đường quốc lộ có hai làn xe một chiều.",
            "Chỉ được thực hiện trên đường cao tốc.",
            "Không được thực hiện vào ban ngày.",
            "Không được phép.",
        ],
        "correct":4
    },
    {
        "image": "",
        "no": 45,
        "index": 45,
        "text": "Người điều khiển xe mô tô hai bánh, ba bánh, xe gắn máy có được phép sử dụng xe để kéo hoặc đẩy các phương tiện khác khi tham gia giao thông không?",
        "tip": "Xe mô tô không được kéo xe khác.",
        "answers": [
            "Được phép.",
            "Nếu phương tiện được kéo, đẩy có khối lượng nhỏ hơn phương tiện của mình.",
            "Tùy trường hợp.",
            "Không được phép.",
        ],
        "correct":4
    },
    {
        "image": "",
        "no": 46,
        "index": 46,
        "text": "Khi điều khiển xe mô tô hai bánh, xe mô tô ba bánh, xe gắn máy, những hành vi buông cả hai tay; sử dụng xe để kéo, đẩy xe khác, vật khác; sử dụng chân chống của xe quệt xuống đường khi xe đang chạy có được phép hay không?",
        "tip": "",
        "answers": [
            "Được phép.",
            "Tùy trường hợp.",
            "Không được phép.",
        ],
        "correct":3
    },
    {
        "image": "",
        "no": 47,
        "index": 47,
        "text": "Khi điều khiển xe mô tô hai bánh, xe mô tô ba bánh, xe gắn máy, những hành vi nào không được phép?",
        "tip": " Buông cả hai tay; sử dụng xe để kéo, đẩy xe khác, vật khác; sử dụng chân chống của xe để quệt xuống đường khi xe đang chạy.",
        "answers": [
            "Buông cả hai tay; sử dụng xe để kéo, đẩy xe khác, vật khác; sử dụng chân chống của xe quệt xuống đường khi xe đang chạy.",
            "Buông một tay; sử dụng xe để chở người hoặc hàng hoá; để chân chạm xuống đất khi khởi hành.",
            "Đội mũ bảo hiểm; chạy xe đúng tốc độ quy định và chấp hành đúng quy tắc giao thông đường bộ.",
            "Chở người ngồi sau dưới 16 tuổi.",
        ],
        "correct":1
    },
    {
        "image": "",
        "no": 48,
        "index": 48,
        "text": "Người ngồi trên xe mô tô hai bánh, ba bánh, xe gắn máy khi tham gia giao thông có được mang, vác vật cồng kềnh hay không?",
        "tip": "Xe mô tô không được mang vác vật cồng kềnh.",
        "answers": [
            "Được mang, vác tùy trường hợp cụ thể.",
            "Không được mang, vác.",
            "Được mang, vác nhưng phải đảm bảo an toàn.",
            "Được mang vác tùy theo sức khỏe của bản thân.",
        ],
        "correct":2
    },
    {
        "image": "",
        "no": 49,
        "index": 49,
        "text": "Người ngồi trên xe mô tô hai bánh, xe mô tô ba bánh, xe gắn máy khi tham gia giao thông có được bám, kéo hoặc đẩy các phương tiện khác không?",
        "tip": "Xe mô tô không được kéo xe khác.",
        "answers": [
            "Được phép.",
            "Được bám trong trường hợp phương tiện của mình bị hỏng.",
            "Được kéo, đẩy trong trường hợp phương tiện khác bị hỏng.",
            "Không được phép.",
        ],
        "correct":4
    },
    {
        "image": "",
        "no": 50,
        "index": 50,
        "text": "Người ngồi trên xe mô tô hai bánh, xe mô tô ba bánh, xe gắn máy khi tham gia giao thông có được sử dụng ô khi trời mưa hay không?",
        "tip": "Không được sử dụng ô.",
        "answers": [
            "Được sử dụng.",
            "Chỉ người ngồi sau được sử dụng.",
            "Không được sử dụng.",
            "Được sử dụng nếu không có áo mưa.",
        ],
        "correct":3
    },
    {
        "image": "",
        "no": 51,
        "index": 51,
        "text": "Khi đang lên dốc người ngồi trên xe mô tô có được phép kéo theo người đang điều khiển xe đạp hay không?",
        "tip": "Xe mô tô không được kéo xe khác.",
        "answers": [
            "Chỉ được phép nếu cả hai đội mũ bảo hiểm.",
            "Không được phép.",
            "Chỉ được phép thực hiện trên đường thật vắng.",
            "Chỉ được phép khi người đi xe đạp đã quá mệt.",
        ],
        "correct":2
    },
    {
        "image": "",
        "no": 52,
        "index": 52,
        "text": "Hành vi sử dụng xe mô tô để kéo, đẩy xe mô tô khác bị hết xăng đến trạm mua xăng có được phép hay không?",
        "tip": "Xe mô tô không được kéo xe khác.",
        "answers": [
            "Chỉ được kéo nếu đã nhìn thấy trạm xăng.",
            "Chỉ được thực hiện trên đường vắng phương tiện cùng tham gia giao thông.",
            "Không được phép.",
        ],
        "correct":3
    },
    {
        "image": "",
        "no": 53,
        "index": 53,
        "text": "Hành vi vận chuyển đồ vật cồng kềnh bằng xe mô tô, xe gắn máy khi tham gia giao thông có được phép hay không?",
        "tip": "Xe mô tô không được mang vác vật cồng kềnh.",
        "answers": [
            "Không được vận chuyển.",
            "Chỉ được vận chuyển khi đã chằng buộc cẩn thận.",
            "Chỉ được vận chuyển vật cồng kềnh trên xe máy nếu khoảng cách về nhà ngắn hơn 2 km.",
        ],
        "correct":1
    },
    {
        "image": "",
        "no": 54,
        "index": 54,
        "text": "Người đủ bao nhiêu tuổi trở lên thì được điều khiển xe ô tô tải, máy kéo có trọng tải từ 3.500 kg trở lên; xe hạng B2 kéo rơ moóc (FB2)?",
        "tip": "Độ tuổi lấy bằng theo hạng (cách nhau 3 tuổi): 16: Xe dưới 50cm3; 18: Hạng A, B1, B2; 21: Hạng C, FB; 24: Hạng D, FC; 27: Hạng E, FD.",
        "answers": [
            "19 tuổi.",
            "21 tuổi.",
            "20 tuổi.",
        ],
        "correct":2
    },
    {
        "image": "",
        "no": 55,
        "index": 55,
        "text": "Người đủ bao nhiêu tuổi trở lên thì được điều khiển xe mô tô hai bánh, xe mô tô ba bánh có dung tích xi lanh từ 50 cm3 trở lên và các loại xe có kết cấu tương tự; xe ô tô tải, máy kéo có trọng tải dưới 3.500 kg; xe ô tô chở người đến 9 chỗ ngồi?",
        "tip": "Độ tuổi lấy bằng theo hạng (cách nhau 3 tuổi): 16: Xe dưới 50cm3; 18: Hạng A, B1, B2; 21: Hạng C, FB; 24: Hạng D, FC; 27: Hạng E, FD.",
        "answers": [
            "16 tuổi.",
            "18 tuổi.",
            "17 tuổi.",
        ],
        "correct":2
    },
    {
        "image": "",
        "no": 56,
        "index": 56,
        "text": "Người lái xe ô tô chở người trên 30 chỗ ngồi (hạng E), lái xe hạng D kéo rơ moóc (FD) phải đủ bao nhiêu tuổi trở lên?",
        "tip": "Độ tuổi lấy bằng theo hạng (cách nhau 3 tuổi): 16: Xe dưới 50cm3; 18: Hạng A, B1, B2; 21: Hạng C, FB; 24: Hạng D, FC; 27: Hạng E, FD.",
        "answers": [
            "23 tuổi.",
            "24 tuổi.",
            "27 tuổi.",
            "30 tuổi.",
        ],
        "correct":3
    },
    {
        "image": "",
        "no": 57,
        "index": 57,
        "text": "Tuổi tối đa của người lái xe ô tô chở người trên 30 chỗ ngồi (hạng E) là bao nhiêu tuổi?",
        "tip": "Độ tuổi tối đa người lái xe ô tô hạng E: Nam 55 tuổi và nữ 50 tuổi.",
        "answers": [
            "55 tuổi đối với nam và 50 tuổi đối với nữ.",
            "55 tuổi đối với nam và nữ.",
            "60 tuổi đối với nam và 55 tuổi đối với nữ.",
            "45 tuổi đối với nam và 40 tuổi đối với nữ.",
        ],
        "correct":1
    },
    {
        "image": "",
        "no": 58,
        "index": 58,
        "text": "Người lái xe chở người từ 10 đến 30 chỗ ngồi (hạng D), lái xe hạng C kéo rơ moóc (FC) phải đủ bao nhiêu tuổi trở lên?",
        "tip": "Độ tuổi lấy bằng theo hạng (cách nhau 3 tuổi): 16: Xe dưới 50cm3; 18: Hạng A, B1, B2; 21: Hạng C, FB; 24: Hạng D, FC; 27: Hạng E, FD.",
        "answers": [
            "23 tuổi.",
            "24 tuổi.",
            "22 tuổi.",
            "18 tuổi.",
        ],
        "correct":2
    },
    {
        "image": "",
        "no": 59,
        "index": 59,
        "text": "Người đủ 16 tuổi được điều khiển các loại xe nào dưới đây?",
        "tip": "Độ tuổi lấy bằng theo hạng (cách nhau 3 tuổi): 16: Xe dưới 50cm3; 18: Hạng A, B1, B2; 21: Hạng C, FB; 24: Hạng D, FC; 27: Hạng E, FD.",
        "answers": [
            "Xe mô tô 2 bánh có dung tích xi-lanh từ 50 cm3 trở lên.",
            "Xe gắn máy có dung tích xi-lanh dưới 50 cm3.",
            "Xe ô tô tải dưới 3.500 kg; xe chở người đến 9 chỗ ngồi.",
            "Tất cả các ý nêu trên.",
        ],
        "correct":2
    },
    {
        "image": "",
        "no": 60,
        "index": 60,
        "text": "Người có giấy phép lái xe mô tô hạng A1 không được phép điều khiển loại xe nào dưới đây?",
        "tip": "A1 mô tô dưới 175 cm3 và xe 3 bánh của người khuyết tật; A2 mô tô 175 cm3 trở lên; A3 xe 3 bánh;",
        "answers": [
            "Xe mô tô có dung tích xi-lanh 125 cm3.",
            "Xe mô tô có dung tích xi-lanh từ 175 cm3 trở lên.",
            "Xe mô tô có dung tích xi-lanh 100 cm3.",
        ],
        "correct":2
    },
    {
        "image": "",
        "no": 61,
        "index": 61,
        "text": "Người có giấy phép lái xe mô tô hạng A1 được phép điều khiển loại xe nào dưới đây?",
        "tip": "A1 mô tô dưới 175 cm3 và xe 3 bánh của người khuyết tật; A2 mô tô 175 cm3 trở lên; A3 xe 3 bánh;",
        "answers": [
            "Xe mô tô có dung tích xi-lanh từ 50 cm3 đến dưới 175 cm3.",
            "Xe mô tô ba bánh dành cho người khuyết tật.",
            "Cả ý 1 và ý 2.",
        ],
        "correct":3
    },
    {
        "image": "",
        "no": 62,
        "index": 62,
        "text": "Người có giấy phép lái xe mô tô hạng A2 được phép điều khiển loại xe nào dưới đây?",
        "tip": "A1 mô tô dưới 175 cm3 và xe 3 bánh của người khuyết tật; A2 mô tô 175 cm3 trở lên; A3 xe 3 bánh;",
        "answers": [
            "Xe mô tô ba bánh.",
            "Xe mô tô hai bánh có dung tích xi lanh từ 175 cm3 trở lên và các loại xe quy định cho giấy phép lái xe hạng A1.",
            "Các loại máy kéo nhỏ có trọng tải đến 1.000 kg.",
        ],
        "correct":2
    },
    {
        "image": "",
        "no": 63,
        "index": 63,
        "text": "Người có giấy phép lái xe mô tô hạng A3 được phép điều khiển loại xe nào dưới đây?",
        "tip": "A1 mô tô dưới 175 cm3 và xe 3 bánh của người khuyết tật; A2 mô tô 175 cm3 trở lên; A3 xe 3 bánh;",
        "answers": [
            "Xe mô tô ba bánh.",
            "Xe mô tô hai bánh có dung tích xi lanh từ 175 cm3 trở lên.",
            "Các loại máy kéo nhỏ có trọng tải đến 1.000 kg.",
        ],
        "correct":1
    },
    {
        "image": "",
        "no": 64,
        "index": 64,
        "text": "Người có giấy phép lái xe hạng B1 số tự động được điều khiển loại xe nào?",
        "tip": "B1, B2 đến 9 chỗ ngồi, xe tải dưới 3.500 kg; B1 không hành nghề lái xe.",
        "answers": [
            "Ô tô số tự động chở người đến 9 chỗ ngồi, kể cả chỗ ngồi cho người lái xe; ô tô tải, kể cả ô tô tải chuyên dùng số tự động có trọng tải thiết kế dưới 3.500 kg; ô tô dùng cho người khuyết tật. Không được hành nghề lái xe.",
            "Ô tô số tự động chở người đến 9 chỗ ngồi, kể cả chỗ ngồi cho người lái xe; ô tô tải, kể cả ô tô tải chuyên dùng số tự động có trọng tải thiết kế dưới 3.500 kg; ô tô dùng cho người khuyết tật. Được hành nghề lái xe kinh doanh vận tải.",
            "Ô tô chở người đến 9 chỗ ngồi, kể cả chỗ ngồi cho người lái xe; ô tô tải, kể cả ô tô tải chuyên dùng có trọng tải thiết kế dưới 3.500 kg; ô tô dùng cho người khuyết tật.",
        ],
        "correct":1
    },
    {
        "image": "",
        "no": 65,
        "index": 65,
        "text": "Người có giấy phép lái xe hạng B1 được điều khiển loại xe nào?",
        "tip": "B1, B2 đến 9 chỗ ngồi, xe tải dưới 3.500 kg; B1 không hành nghề lái xe.",
        "answers": [
            "Ô tô chở người đến 9 chỗ ngồi, kể cả chỗ ngồi cho người lái xe; ô tô tải, kể cả ô tô tải chuyên dùng có trọng tải thiết kế dưới 3.500 kg; máy kéo kéo một rơ moóc có trọng tải thiết kế dưới 3.500 kg. Được hành nghề lái xe.",
            "Ô tô chở người đến 9 chỗ ngồi, kể cả chỗ ngồi cho người lái xe; ô tô tải, kể cả ô tô tải chuyên dùng có trọng tải thiết kế dưới 3.500 kg; máy kéo kéo một rơ moóc có trọng tải thiết kế dưới 3.500 kg. Không hành nghề lái xe.",
            "Ô tô số tự động chở người đến 9 chỗ ngồi, kể cả chỗ ngồi cho người lái xe; ô tô tải, kể cả ô tô tải chuyên dùng số tự động có trọng tải thiết kế trên 3.500 kg; ô tô dùng cho người khuyết tật.",
        ],
        "correct":1
    },
    {
        "image": "",
        "no": 66,
        "index": 66,
        "text": "Người có giấy phép lái xe hạng B2 được điều khiển loại xe nào?",
        "tip": "B2 đến 9 chỗ ngồi, xe tải dưới 3.500 kg.",
        "answers": [
            "Xe ô tô chở người trên 9 chỗ ngồi; xe ô tô tải; máy kéo có trọng tải trên 3.500 kg.",
            "Xe ô tô chở người đến 9 chỗ ngồi; xe ô tô tải; máy kéo có trọng tải dưới 3.500 kg.",
            "Xe ô tô chở người từ 10 đến 30 chỗ ngồi; xe ô tô tải; máy kéo có trọng tải trên 3.500 kg.",
        ],
        "correct":2
    },
    {
        "image": "",
        "no": 67,
        "index": 67,
        "text": "Người có giấy phép lái xe hạng C được điều khiển loại xe nào?",
        "tip": "C đến 9 chỗ ngồi, xe trên 3.500 kg.",
        "answers": [
            "Xe ô tô chở người trên 9 chỗ ngồi; xe ô tô tải; máy kéo có trọng tải trên 3.500 kg.",
            "Xe ô tô chở người từ 10 đến 30 chỗ ngồi; xe ô tô tải; máy kéo có trọng tải trên 3.500 kg.",
            "Xe ô tô chở người đến 9 chỗ ngồi; xe ô tô tải; máy kéo có trọng tải trên 3.500 kg.",
        ],
        "correct":3
    },
    {
        "image": "",
        "no": 68,
        "index": 68,
        "text": "Người có giấy phép lái xe hạng D được điều khiển loại xe nào dưới đây?",
        "tip": "D chở đến 30 người.",
        "answers": [
            "Xe ô tô chở người đến 30 chỗ ngồi, kể cả chỗ ngồi cho người lái xe; xe ô tô tải, máy kéo có trọng tải trên 3.500 kg.",
            "Xe ô tô chở người trên 30 chỗ ngồi; xe ô tô tải, máy kéo có trọng tải trên 3.500 kg.",
            "Xe kéo rơ moóc, ô tô đầu kéo kéo sơ mi rơ moóc và được điều khiển các loại xe theo quy định cho giấy phép lái xe hạng B1, B2, C và FB2.",
        ],
        "correct":1
    },
    {
        "image": "",
        "no": 69,
        "index": 69,
        "text": "Người có giấy phép lái xe hạng E được điều khiển loại xe nào dưới đây?",
        "tip": "E chở trên 30 người.",
        "answers": [
            "Xe kéo rơ moóc, ô tô đầu kéo kéo sơ mi rơ moóc và được điều khiển các loại xe theo quy định cho giấy phép lái xe hạng B1, B2, C và FB2.",
            "Xe ô tô chở người trên 30 chỗ ngồi; xe ô tô tải, máy kéo có trọng tải trên 3.500 kg.",
            "Xe kéo rơ moóc và được điều khiển các loại xe; ô tô chở khách nối toa và các loại xe quy định cho giấy phép lái xe hạng B1, B2, C, D, FB2, FD.",
        ],
        "correct":2
    },
    {
        "image": "",
        "no": 70,
        "index": 70,
        "text": "Người có giấy phép lái xe hạng FC được điều khiển loại xe nào dưới đây?",
        "tip": "FC: C + kéo (ô tô đầu kéo, kéo sơ mi rơ moóc); FE: E + kéo (ô tô chở khách nối toa)",
        "answers": [
            "Các loại xe được quy định tại giấy phép lái xe hạng C có kéo rơ moóc, ô tô đầu kéo kéo sơ mi rơ moóc, ô tô chở khách nối toa và được điều khiển các loại xe quy định cho giấy phép lái xe hạng B1, B2 và FB2.",
            "Các loại xe được quy định tại giấy phép lái xe hạng C có kéo rơ moóc, ô tô đầu kéo kéo sơ mi rơ moóc và được điều khiển các loại xe quy định cho giấy phép lái xe hạng B1, B2 và FB2.",
            "Mô tô hai bánh, các loại xe được quy định tại giấy phép lái xe hạng C có kéo rơ moóc, ô tô đầu kéo kéo sơ mi rơ moóc và được điều khiển các loại xe quy định cho giấy phép lái xe hạng B1, B2 và FB2.",
            "Tất cả các loại xe nêu trên.",
        ],
        "correct":2
    },
    {
        "image": "",
        "no": 71,
        "index": 71,
        "text": "Người có giấy phép lái xe hạng FE được điều khiển loại xe nào dưới đây?",
        "tip": "FC: C + kéo (ô tô đầu kéo, kéo sơ mi rơ moóc); FE: E + kéo (ô tô chở khách nối toa)",
        "answers": [
            "Các loại xe được quy định tại giấy phép lái xe hạng E có kéo rơ moóc và được điều khiển các loại xe: ô tô chở khách nối toa và các loại xe quy định cho giấy phép lái xe hạng B1, B2, C, D, FB2, FD.",
            "Các loại xe được quy định tại giấy phép lái xe hạng E có kéo rơ moóc, ô tô đầu kéo kéo sơ mi rơ moóc và được điều khiển các loại xe: ô tô chở khách nối toa và các loại xe quy định cho giấy phép lái xe hạng B1, B2, C, D, FB2, FD.",
            "Tất cả các loại xe nêu trên.",
        ],
        "correct":1
    },
    {
        "image": "q72.png",
        "no": 72,
        "index": 72,
        "text": "Biển báo hiệu có dạng hình tròn, viền đỏ, nền trắng, trên nền có hình vẽ hoặc chữ số, chữ viết màu đen là loại biển gì dưới đây?",
        "tip": "Biển cấm: Vòng tròn đỏ.",
        "answers": [
            "Biển báo nguy hiểm.",
            "Biển báo cấm.",
            "Biển báo hiệu lệnh.",
            "Biển báo chỉ dẫn.",
        ],
        "correct":2
    },
    {
        "image": "q73.png",
        "no": 73,
        "index": 73,
        "text": "Biển báo hiệu có dạng tam giác đều, viền đỏ, nền màu vàng, trên có hình vẽ màu đen là loại biển gì dưới đây?",
        "tip": "Biển nguy hiểm: Hình tam giác vàng.",
        "answers": [
            "Biển báo nguy hiểm.",
            "Biển báo cấm.",
            "Biển báo hiệu lệnh.",
            "Biển báo chỉ dẫn.",
        ],
        "correct":1
    },
    {
        "image": "q74.png",
        "no": 74,
        "index": 74,
        "text": "Biển báo hiệu hình tròn có nền xanh lam có hình vẽ màu trắng là loại biển gì dưới đây?",
        "tip": "Biển hiệu lệnh: Vòng tròn xanh.",
        "answers": [
            "Biển báo nguy hiểm.",
            "Biển báo cấm.",
            "Biển báo hiệu lệnh phải thi hành.",
            "Biển báo chỉ dẫn.",
        ],
        "correct":3
    },
    {
        "image": "q75.png",
        "no": 75,
        "index": 75,
        "text": "Biển báo hiệu hình chữ nhật hoặc hình vuông hoặc hình mũi tên nền xanh lam là loại biển gì dưới đây?",
        "tip": "Biển chỉ dẫn: Hình vuông hoặc hình chữ nhật xanh.",
        "answers": [
            "Biển báo nguy hiểm.",
            "Biển báo cấm.",
            "Biển báo hiệu lệnh phải thi hành.",
            "Biển báo chỉ dẫn.",
        ],
        "correct":4
    },
    {
        "image": "",
        "no": 76,
        "index": 76,
        "text": "Khi tập lái xe ô tô, người tập lái xe phải thực hiện các điều kiện gì dưới đây?",
        "tip": "Khi tập lái cần có giáo viên và phù hiệu.",
        "answers": [
            "Phải thực hành lái xe trên xe tập lái và có giáo viên bảo trợ tay lái.",
            "Phải mang theo phù hiệu \"học viên tập lái xe\".",
            "Phải mang theo giấy chứng nhận kiểm định an toàn kỹ thuật và bảo vệ môi trường còn hiệu lực, giấy phép vận chuyển (nếu các loại xe đó cần phải có).",
            "Cả ý 1 và ý 2.",
        ],
        "correct":4
    },
    {
        "image": "",
        "no": 77,
        "index": 77,
        "text": "Khi dạy thực hành lái xe, giáo viên phải mang theo các loại giấy tờ gì dưới đây?",
        "tip": "Giáo viên phải mang giấy phép xe tập lái.",
        "answers": [
            "Phải mang theo phù hiệu \"Giáo viên dạy lái xe\", giấy chứng nhận kiểm định an toàn kỹ thuật và bảo vệ môi trường còn hiệu lực, giấy phép xe tập lái do cơ quan có thẩm quyền cấp còn hiệu lực.",
            "Phải mang theo phù hiệu \"học viên tập lái xe\" và kế hoạch học tập của khóa học.",
            "Phải mang theo giấy chứng nhận Giáo viên dạy thực hành lái xe, biên lai thu phí bảo trì đường bộ.",
        ],
        "correct":1
    },
    {
        "image": "",
        "no": 78,
        "index": 78,
        "text": "Xe ô tô tập lái phải đảm bảo các điều kiện gì dưới đây?",
        "tip": "gắn biển tập lái và có thiết bị giám sát",
        "answers": [
            "Gắn 02 biển \"TẬP LÁI\" trước và sau xe, có hệ thống phanh phụ được lắp đặt bảo đảm hiệu quả phanh, được bố trí bên ghế ngồi của giáo viên dạy thực hành lái xe.",
            "Xe tập lái loại tải thùng có mui che mưa, che nắng, ghế ngồi cho học viên, có giấy chứng nhận kiểm định an toàn kỹ thuật và bảo vệ môi trường phương tiện giao thông cơ giới đường bộ còn hiệu lực.",
            "Cả ý 1 và ý 2.",
        ],
        "correct":3
    },
    {
        "image": "",
        "no": 79,
        "index": 79,
        "text": "Việc sát hạch cấp giấy phép lái xe ô tô phải thực hiện ở đâu và như thế nào?",
        "tip": "",
        "answers": [
            "Tại các cơ sở đào tạo lái xe có đủ điều kiện và phải bảo đảm công khai, minh bạch.",
            "Tại sân tập lái của cơ sở đào tạo lái xe và phải đảm bảo công khai, minh bạch.",
            "Tại các trung tâm sát hạch lái xe có đủ điều kiện hoạt động và phải bảo đảm công khai, minh bạch.",
        ],
        "correct":3
    },
    {
        "image": "",
        "no": 80,
        "index": 80,
        "text": "Khi điều khiển xe chạy trên đường, người lái xe phải mang theo các loại giấy tờ gì?",
        "tip": "",
        "answers": [
            "Giấy chứng nhận tốt nghiệp khóa đào tạo của hạng xe đang điều khiển, đăng ký xe, giấy phép lưu hành xe.",
            "Giấy phép lái xe phù hợp với loại xe đó; lệnh vận chuyển, đăng ký xe, giấy chứng nhận kiểm tra chất lượng an toàn kỹ thuật và bảo vệ môi trường của xe cơ giới sau khi cải tạo; giấy phép vận chuyển (nếu loại xe đó cần phải có).",
            "Giấy phép lái xe phù hợp với loại xe đó, đăng ký xe, giấy chứng nhận kiểm định kỹ thuật và bảo vệ môi trường, giấy chứng nhận bảo hiểm trách nhiệm dân sự của chủ xe cơ giới và giấy phép vận chuyển (nếu loại xe đó cần phải có), các giấy tờ phải còn giá trị sử dụng.",
        ],
        "correct":3
    },
    {
        "image": "",
        "no": 81,
        "index": 81,
        "text": "Khi sử dụng giấy phép lái xe đã khai báo mất để điều khiển phương tiện cơ giới đường bộ, ngoài việc bị thu hồi giấy phép lái xe, chịu trách nhiệm trước pháp luật, người lái xe không được cấp giấy phép lái xe trong thời gian bao nhiêu năm?",
        "tip": "05 năm không cấp lại nếu sử dụng bằng lái đã khai báo mất.",
        "answers": [
            "02 năm.",
            "03 năm.",
            "05 năm.",
            "04 năm.",
        ],
        "correct":3
    },
    {
        "image": "q82.png",
        "no": 82,
        "index": 82,
        "text": "Khi gặp hiệu lệnh như dưới đây của cảnh sát giao thông thì người tham gia giao thông phải đi như thế nào là đúng quy tắc giao thông?",
        "tip": "Người điều khiển giao thông tay giang ngang thì trước mặt và sau lưng dừng lại.",
        "answers": [
            "Người tham gia giao thông ở các hướng phải dừng lại.",
            "Người tham gia giao thông ở các hướng được đi theo chiều gậy chỉ của cảnh sát giao thông.",
            "Người tham gia giao thông ở phía trước và phía sau người điều khiển được đi tất cả các hướng; giao thông ở phía bên phải và phía bên trái người điều khiển phải dừng lại.",
            "Người tham gia giao thông ở phía trước và phía sau người điều khiển phải dừng lại; giao thông ở phía bên phải và bên trái người điều khiển được đi tất cả các hướng.",
        ],
        "correct":4
    },
    {
        "image": "q83.png",
        "no": 83,
        "index": 83,
        "text": "Khi gặp hiệu lệnh như dưới đây của cảnh sát giao thông thì người tham gia giao thông phải đi như thế nào là đúng quy tắc giao thông?",
        "tip": "Người điều khiển giao thông giơ tay thẳng đứng thì ở các hướng phải dừng lại.",
        "answers": [
            "Người tham gia giao thông ở hướng đối diện cảnh sát giao thông được đi, các hướng khác cần phải dừng lại.",
            "Người tham gia giao thông được rẽ phải theo chiều mũi tên màu xanh ở bục cảnh sát giao thông.",
            "Người tham gia giao thông ở các hướng đều phải dừng lại trừ các xe đã ở trong khu vực giao nhau.",
            "Người ở hướng đối diện cảnh sát giao thông phải dừng lại, các hướng khác được đi trong đó có bạn.",
        ],
        "correct":3
    },
    {
        "image": "",
        "no": 84,
        "index": 84,
        "text": "Trên đường giao thông, khi hiệu lệnh của người điều khiển giao thông trái với hiệu lệnh của đèn hoặc biển báo hiệu thì người tham gia giao thông phải chấp hành theo hiệu lệnh nào?",
        "tip": "Ưu tiên hiệu lệnh của người điều khiển giao thông.",
        "answers": [
            "Hiệu lệnh của người điều khiển giao thông.",
            "Hiệu lệnh của đèn điều khiển giao thông.",
            "Hiệu lệnh của biển báo hiệu đường bộ.",
            "Theo quyết định của người tham gia giao thông nhưng phải bảo đảm an toàn.",
        ],
        "correct":1
    },
    {
        "image": "",
        "no": 85,
        "index": 85,
        "text": "Tại nơi có biển báo hiệu cố định lại có báo hiệu tạm thời thì người tham gia giao thông phải chấp hành hiệu lệnh của báo hiệu nào?",
        "tip": "Ưu tiên biển báo tạm thời.",
        "answers": [
            "Biển báo hiệu cố định.",
            "Báo hiệu tạm thời.",
        ],
        "correct":2
    },
    {
        "image": "",
        "no": 86,
        "index": 86,
        "text": "Trên đường có nhiều làn đường cho xe đi cùng chiều được phân biệt bằng vạch kẻ phân làn đường, người điều khiển phương tiện phải cho xe đi như thế nào?",
        "tip": "Chuyển làn đường phải có tín hiệu báo trước.",
        "answers": [
            "Cho xe đi trên bất kỳ làn đường nào hoặc giữa 02 làn đường nếu không có xe phía trước; khi cần thiết phải chuyển làn đường, người lái xe phải quan sát xe phía trước để bảo đảm an toàn.",
            "Phải cho xe đi trong một làn đường và chỉ được chuyển làn đường ở những nơi cho phép; khi chuyển làn phải có tín hiệu báo trước và phải bảo đảm an toàn.",
            "Phải cho xe đi trong một làn đường, khi cần thiết phải chuyển làn đường, người lái xe phải quan sát xe phía trước để bảo đảm an toàn.",
        ],
        "correct":2
    },
    {
        "image": "",
        "no": 87,
        "index": 87,
        "text": "Trên đường một chiều có vạch kẻ phân làn đường, xe thô sơ và xe cơ giới phải đi như thế nào là đúng quy tắc giao thông?",
        "tip": "Xe thô sơ phải đi làn đường nên phải trong cùng.",
        "answers": [
            "Xe thô sơ phải đi trên làn đường bên trái ngoài cùng, xe cơ giới, xe máy chuyên dùng đi trên làn đường bên phải.",
            "Xe thô sơ phải đi trên làn đường bên phải trong cùng; xe cơ giới, xe máy chuyên dùng đi trên làn đường bên trái.",
            "Xe thô sơ đi trên làn đường phù hợp không gây cản trở giao thông, xe cơ giới, xe máy chuyên dùng đi trên làn đường bên phải.",
        ],
        "correct":2
    },
    {
        "image": "",
        "no": 88,
        "index": 88,
        "text": "Bạn đang lái xe trong khu vực đô thị từ 22 giờ đến 5 giờ sáng hôm sau và cần vượt một xe khác, bạn cần báo hiệu như thế nào để đảm bảo an toàn giao thông?",
        "tip": "Chỉ sử dụng còi từ 5 giờ sáng đến 22 giờ tối. Nên phải sử dụng đèn để báo hiệu.",
        "answers": [
            "Phải báo hiệu bằng đèn hoặc còi.",
            "Chỉ được báo hiệu bằng còi.",
            "Phải báo hiệu bằng cả còi và đèn.",
            "Chỉ được báo hiệu bằng đèn.",
        ],
        "correct":4
    },
    {
        "image": "",
        "no": 89,
        "index": 89,
        "text": "Khi điều khiển xe chạy trên đường biết có xe sau xin vượt nếu đủ điều kiện an toàn người lái xe phải làm gì?",
        "tip": "",
        "answers": [
            "Tăng tốc độ và ra hiệu cho xe sau vượt, không được gây trở ngại cho xe sau vượt.",
            "Người điều khiển phương tiện phía trước phải giảm tốc độ, đi sát về bên phải của phần đường xe chạy cho đến khi xe sau đã vượt qua, không được gây trở ngại cho xe sau vượt.",
            "Cho xe tránh về bên trái mình và ra hiệu cho xe sau vượt; nếu có chướng ngại vật phía trước hoặc thiếu điều kiện an toàn chưa cho vượt được phải ra hiệu cho xe sau biết; cấm gây trở ngại cho xe xin vượt.",
        ],
        "correct":2
    },
    {
        "image": "",
        "no": 90,
        "index": 90,
        "text": "Trong khu dân cư, ở nơi nào cho phép người lái xe, người điều khiển xe máy chuyên dùng được quay đầu xe?",
        "tip": "Quay đầu xe ở nơi giao nhau và có biển báo cho phép quay đầu xe.",
        "answers": [
            "Ở nơi đường giao nhau và nơi có biển báo cho phép quay đầu xe.",
            "Ở nơi có đường rộng để cho các loại xe chạy một chiều.",
            "Ở bất kỳ nơi nào.",
        ],
        "correct":1
    },
    {
        "image": "",
        "no": 91,
        "index": 91,
        "text": "Người lái xe phải làm gì khi quay đầu xe trên cầu, đường ngầm hay khu vực đường bộ giao nhau cùng mức với đường sắt?",
        "tip": "Không được quay xe trên cầu.",
        "answers": [
            "Không được quay đầu xe.",
            "Lợi dụng chỗ rộng và phải có người làm tín hiệu sau xe để bảo đảm an toàn.",
            "Lợi dụng chỗ rộng có thể quay đầu được để quay đầu xe cho an toàn.",
        ],
        "correct":1
    },
    {
        "image": "",
        "no": 92,
        "index": 92,
        "text": "Khi muốn chuyển hướng, người lái xe phải thực hiện như thế nào để đảm bảo an toàn giao thông?",
        "tip": "Chuyển hướng phải giảm tốc độ.",
        "answers": [
            "Quan sát gương, ra tín hiệu chuyển hướng, quan sát an toàn và chuyển hướng.",
            "Quan sát gương, giảm tốc độ, ra tín hiệu chuyển hướng, quan sát an toàn và chuyển hướng.",
            "Quan sát gương, tăng tốc độ, ra tín hiệu và chuyển hướng.",
        ],
        "correct":2
    },
    {
        "image": "",
        "no": 93,
        "index": 93,
        "text": "Khi lùi xe người lái xe phải làm gì để bảo đảm an toàn?",
        "tip": "Lùi xe phải quan sát phía sau.",
        "answers": [
            "Quan sát phía trước và cho lùi xe ở tốc độ chậm.",
            "Lợi dụng nơi đường giao nhau đủ chiều rộng để lùi.",
            "Phải quan sát phía sau, có tín hiệu cần thiết và chỉ nào thấy không nguy hiểm mới được lùi.",
        ],
        "correct":3
    },
    {
        "image": "",
        "no": 94,
        "index": 94,
        "text": "Khi bạn nhìn thấy đèn phía sau xe ô tô có màu sáng trắng, ô tô đó đang trong tình trạng như thế nào?",
        "tip": "Đèn sau màu sáng trắng là đang lùi xe.",
        "answers": [
            "Đang phanh.",
            "Đang bật đèn sương mù.",
            "Đang chuẩn bị lùi hoặc đang lùi.",
            "Đang bị hỏng động cơ.",
        ],
        "correct":3
    },
    {
        "image": "",
        "no": 95,
        "index": 95,
        "text": "Khi tránh xe đi ngược chiều, các xe phải nhường đường như thế nào là đúng quy tắc giao thông?",
        "tip": "Tránh xe ngược chiều thì nhường đường qua đường hẹp và nhường xe lên dốc.",
        "answers": [
            "Nơi đường hẹp chỉ đủ cho một xe chạy và có chỗ tránh xe thì xe nào ở gần chỗ tránh hơn phải vào vị trí tránh, nhường đường cho xe kia đi.",
            "Xe xuống dốc phải nhường đường cho xe đang lên dốc; xe nào có chướng ngại vật phía trước phải nhường đường cho xe không có chướng ngại vật đi trước.",
            "Xe lên dốc phải nhường đường cho xe xuống dốc; xe nào không có chướng ngại vật phía trước phải nhường đường cho xe có chướng ngại vật đi trước",
            "Cả ý 1 và ý 2.",
        ],
        "correct":4
    },
    {
        "image": "",
        "no": 96,
        "index": 96,
        "text": "Bạn đang lái xe trên đường hẹp, xuống dốc và gặp một xe đang đi lên dốc, bạn cần làm gì?",
        "tip": "Nhường đường cho xe lên dốc.",
        "answers": [
            "Tiếp tục đi vì xe lên dốc phải nhường đường cho mình.",
            "Nhường đường cho xe lên dốc.",
            "Chỉ nhường đường khi xe lên dốc nháy đèn.",
        ],
        "correct":2
    },
    {
        "image": "",
        "no": 97,
        "index": 97,
        "text": "Tại nơi đường giao nhau, người lái xe đang đi trên đường không ưu tiên phải nhường đường như thế nào là đúng quy tắc giao thông?",
        "tip": "Đường không ưu tiên nhường đường cho xe trên đường ưu tiên.",
        "answers": [
            "Nhường đường cho xe đi ở bên phải mình tới.",
            "Nhường đường cho xe đi ở bên trái mình tới.",
            "Nhường đường cho xe đi trên đường ưu tiên hoặc đường chính từ bất kỳ hướng nào tới.",
        ],
        "correct":3
    },
    {
        "image": "",
        "no": 98,
        "index": 98,
        "text": "Tại nơi đường giao nhau không có báo hiệu đi theo vòng xuyến, người điều khiển phương tiện phải nhường đường như thế nào là đúng quy tắc giao thông?",
        "tip": "Giao nhau không có vòng xuyến thì nhường xe đến từ bên phải.",
        "answers": [
            "Phải nhường đường cho xe đi đến từ bên phải.",
            "Xe báo hiệu xin đường trước xe đó được đi trước.",
            "Phải nhường đường cho xe đi đến từ bên trái.",
        ],
        "correct":1
    },
    {
        "image": "",
        "no": 99,
        "index": 99,
        "text": "Trên đoạn đường bộ giao nhau cùng mức với đường sắt, cầu đường bộ đi chung với đường sắt thì loại phương tiện nào được quyền ưu tiên đi trước?",
        "tip": "",
        "answers": [
            "Phương tiện nào bên phải không vướng.",
            "Phương tiện nào ra tín hiệu xin đường trước.",
            "Phương tiện giao thông đường sắt.",
        ],
        "correct":3
    },
    {
        "image": "",
        "no": 100,
        "index": 100,
        "text": "Tại nơi đường bộ giao nhau cùng mức với đường sắt chỉ có đèn tín hiệu hoặc chuông báo hiệu, khi đèn tín hiệu màu đỏ đã bật sáng hoặc có tiếng chuông báo hiệu, người tham gia giao thông phải dừng lại ngay và giữ khoảng cách tối thiểu bao nhiêu mét tính từ ray gần nhất?",
        "tip": "Đứng cách ray đường sắt 5m.",
        "answers": [
            "5 mét.",
            "3 mét.",
            "4 mét.",
        ],
        "correct":1
    },
    {
        "image": "",
        "no": 101,
        "index": 101,
        "text": "Người lái xe phải làm gì khi điều khiển xe vào đường cao tốc?",
        "tip": "Vào cao tốc phải nhường đường cho xe đang chạy trên đường.",
        "answers": [
            "Phải có tín hiệu xin vào và phải nhường đường cho xe đang chạy trên đường; khi thấy an toàn mới cho xe nhập vào dòng xe ở làn đường sát mép ngoài; nếu có làn đường tăng tốc thì phải cho xe chạy trên làn đường đó trước khi vào làn đường của đường cao tốc.",
            "Phải có tín hiệu xin vào và phải nhanh chóng vượt xe đang chạy trên đường để nhập vào dòng xe ở làn đường sát mép ngoài; nếu có làn đường tăng tốc thì phải cho xe chạy qua làn đường đó để vào làn đường của đường cao tốc.",
        ],
        "correct":1
    },
    {
        "image": "",
        "no": 102,
        "index": 102,
        "text": "Trên đường cao tốc, người lái xe phải dừng xe, đỗ xe như thế nào để đảm bảo an toàn giao thông?",
        "tip": "Trên cao tốc chỉ dừng đỗ ở nơi quy định.",
        "answers": [
            "Không được dừng xe, đỗ xe hoặc chỉ được dừng xe, đỗ xe ở nơi đường rộng, nếu dừng, đỗ xe ở nơi đường hẹp phải sử dụng còi báo hiệu để người lái xe khác biết.",
            "Chỉ được dừng xe, đỗ xe ở nơi quy định, trường hợp buộc phải dừng xe, đỗ xe không đúng nơi quy định thì người lái xe phải đưa xe ra khỏi phần đường xe chạy, nếu không thể được thì phải báo hiệu để người lái xe khác biết.",
            "Chỉ được dừng xe, đỗ xe ở nơi đường rộng; trường hợp dừng xe, đỗ xe tại nơi đường hẹp phải đặt các chướng ngại vật trên đường để yêu cầu người lái xe khác giảm tốc độ để bảo đảm an toàn.",
        ],
        "correct":2
    },
    {
        "image": "",
        "no": 103,
        "index": 103,
        "text": "Những trường hợp nào ghi ở dưới đây không được đi vào đường cao tốc trừ người, phương tiện, thiết bị phục vụ cho việc quản lý, bảo trì đường cao tốc?",
        "tip": "Xe thiết kế nhỏ hơn 70km/h không được vào cao tốc.",
        "answers": [
            "Người đi bộ, xe thô sơ, xe gắn máy, xe mô tô và máy kéo; xe máy chuyên dùng có tốc độ thiết kế nhỏ hơn 70km/h.",
            "Xe mô tô và xe máy chuyên dùng có tốc độ thiết kế lớn hơn 70km/h.",
            "Người đi bộ, xe thô sơ, xe gắn máy và xe ô tô.",
        ],
        "correct":1
    },
    {
        "image": "",
        "no": 104,
        "index": 104,
        "text": "Người điều khiển phương tiện tham gia giao thông trong hầm đường bộ ngoài việc phải tuân thủ các quy tắc giao thông còn phải thực hiện những quy định nào dưới đây?",
        "tip": "Trong hầm chỉ được dừng xe, đỗ xe ở nơi quy định.",
        "answers": [
            "Xe cơ giới, xe máy chuyên dùng phải bật đèn; xe thô sơ phải bật đèn hoặc có vật phát sáng báo hiệu; chỉ được dừng xe, đỗ xe ở nơi quy định.",
            "Xe cơ giới phải bật đèn ngay cả khi đường hầm sáng; phải cho xe chạy trên một làn đường và chỉ chuyển làn ở nơi được phép; được quay đầu xe, lùi xe khi cần thiết.",
            "Xe máy chuyên dùng phải bật đèn ngay cả khi đường hầm sáng; phải cho xe chạy trên một làn đường và chỉ chuyển làn ở nơi được phép; được quay đầu xe, lùi xe khi cần thiết.",
        ],
        "correct":1
    },
    {
        "image": "",
        "no": 105,
        "index": 105,
        "text": "Xe quá tải trọng, quá khổ giới hạn tham gia giao thông cần tuân thủ quy định nào ghi ở dưới đây?",
        "tip": "Xe quá tải trọng phải do cơ quan quản lý đường bộ cấp phép.",
        "answers": [
            "Phải được cơ quan quản lý đường bộ có thẩm quyền cấp phép và phải thực hiện các biện pháp bắt buộc để bảo vệ đường bộ, bảo đảm an toàn giao thông.",
            "Chủ phương tiện và lái xe chỉ cần thực hiện biện pháp để hạn chế việc gây hư hại đường bộ.",
            "Được tham gia giao thông trên đường rộng.",
            "Chỉ được tham gia giao thông vào ban đêm.",
        ],
        "correct":1
    },
    {
        "image": "",
        "no": 106,
        "index": 106,
        "text": "Việc nối giữa xe kéo với xe được kéo trong trường hợp hệ thống hãm của xe được kéo không còn hiệu lực thì phải dùng cách nào?",
        "tip": "Kéo xe không hệ thống hãm phải dùng thanh nối cứng.",
        "answers": [
            "Dùng dây cáp có độ dài 10 mét.",
            "Dùng dây cáp có độ dài 5 mét.",
            "Dùng thanh nối cứng.",
        ],
        "correct":3
    },
    {
        "image": "",
        "no": 107,
        "index": 107,
        "text": "Xe kéo rơ moóc khi tham gia giao thông phải tuân thủ điều kiện nào ghi ở dưới đây?",
        "tip": "Trọng lượng xe kéo rơ moóc phải lớn hơn rơ moóc.",
        "answers": [
            "Phải có tổng trọng lượng lớn hơn tổng trọng lượng của rơ moóc hoặc phải có hệ thống hãm có hiệu lực cho rơ moóc.",
            "Phải có tổng trọng lượng tương đương tổng trọng lượng của rơ moóc hoặc phải có hệ thống hãm có hiệu lực cho xe kéo rơ moóc.",
            "Phải được lắp phanh phụ theo quy định để đảm bảo an toàn.",
        ],
        "correct":1
    },
    {
        "image": "",
        "no": 108,
        "index": 108,
        "text": "Xe ô tô kéo xe khác thế nào là đúng quy tắc giao thông?",
        "tip": "Kéo xe không hệ thống hãm phải dùng thanh nối cứng.",
        "answers": [
            "Được kéo theo một xe ô tô hoặc xe máy chuyên dùng khác khi xe này không tự chạy được và phải đảm bảo an toàn; xe được kéo phải có người điều khiển và hệ thống lái của xe đó phải còn hiệu lực; trường hợp hệ thống hãm của xe được kéo không còn hiệu lực thì xe kéo nhau phải nối bằng thanh nối cứng.",
            "Được kéo theo một xe ô tô và xe máy chuyên dùng khác khi xe này không tự chạy được và phải đảm bảo an toàn; xe được kéo phải có người ngồi trên xe để kịp thời phát hiện các trường hợp mất an toàn.",
            "Được kéo theo một xe ô tô và xe máy chuyên dùng khác khi xe này không tự chạy được và hệ thống phanh bị hỏng, xe kéo nhau phải nối bằng dây cáp có độ dài phù hợp.",
        ],
        "correct":1
    },
    {
        "image": "",
        "no": 109,
        "index": 109,
        "text": "Người ngồi trên xe mô tô 2 bánh, xe gắn máy phải đội mũ bảo hiểm có cài quai đúng quy cách khi nào?",
        "tip": "",
        "answers": [
            "Khi tham gia giao thông đường bộ.",
            "Chỉ khi đi trên đường chuyên dùng; đường cao tốc.",
            "Khi tham gia giao thông trên đường tỉnh lộ hoặc quốc lộ.",
        ],
        "correct":1
    },
    {
        "image": "",
        "no": 110,
        "index": 110,
        "text": "Người điều khiển xe mô tô hai bánh, xe gắn máy được phép chở tối đa 2 người trong những trường hợp nào?",
        "tip": "",
        "answers": [
            "Chở người bệnh đi cấp cứu; trẻ em dưới 14 tuổi.",
            "Áp giải người có hành vi vi phạm pháp luật.",
            "Cả ý 1 và ý 2.",
        ],
        "correct":3
    },
    {
        "image": "",
        "no": 111,
        "index": 111,
        "text": "Người điều khiển xe mô tô hai bánh, xe gắn máy không được thực hiện những hành vi nào dưới đây?",
        "tip": "Xe mô tô hai bánh không được đi vào phần đường dành cho người đi bộ.",
        "answers": [
            "Đi vào phần đường dành cho người đi bộ và phương tiện khác; sử dụng ô, điện thoại di động, thiết bị âm thanh (trừ thiết bị trợ thính), đi xe dàn hàng ngang.",
            "Chở 02 người; trong đó, có người bệnh đi cấp cứu hoặc trẻ em dưới 14 tuổi hoặc áp giải người có hành vi vi phạm pháp luật.",
            "Điều khiển phương tiện tham gia giao thông trên đường tỉnh lộ hoặc quốc lộ.",
        ],
        "correct":1
    },
    {
        "image": "",
        "no": 112,
        "index": 112,
        "text": "Người điều khiển xe mô tô hai bánh, xe gắn máy có được đi xe dàn hàng ngang; đi xe vào phần đường dành cho người đi bộ và phương tiện khác; sử dụng ô, điện thoại di động, thiết bị âm thanh (trừ thiết bị trợ thính) hay không?",
        "tip": "",
        "answers": [
            "Được phép nhưng phải đảm bảo an toàn.",
            "Không được phép.",
            "Được phép tùy từng hoàn cảnh, điều kiện cụ thể.",
        ],
        "correct":2
    },
    {
        "image": "",
        "no": 113,
        "index": 113,
        "text": "Người lái xe phải giảm tốc độ thấp hơn tốc độ tối đa cho phép (có thể dừng lại một cách an toàn) trong trường hợp nào dưới đây?",
        "tip": "",
        "answers": [
            "Khi có báo hiệu cảnh báo nguy hiểm hoặc có chướng ngại vật trên đường; khi chuyển hướng xe chạy hoặc tầm nhìn bị hạn chế; khi qua nơi đường giao nhau, nơi đường bộ giao nhau với đường sắt; đường vòng; đường có địa hình quanh co, đèo dốc.",
            "Khi qua cầu, cống hẹp; khi lên gần đỉnh dốc, khi xuống dốc, khi qua trường học, khu đông dân cư, khu vực đang thi công trên đường bộ; hiện trường xảy ra tai nạn giao thông.",
            "Khi điều khiển xe vượt xe khác trên đường quốc lộ, đường cao tốc.",
            "Cả ý 1 và ý 2.",
        ],
        "correct":4
    },
    {
        "image": "",
        "no": 114,
        "index": 114,
        "text": "Khi gặp một đoàn xe, một đoàn xe tang hay gặp một đoàn người có tổ chức theo đội ngũ, người lái xe phải xử lý như thế nào?",
        "tip": "",
        "answers": [
            "Từ từ đi cắt qua đoàn người, đoàn xe.",
            "Không được cắt ngang qua đoàn người, đoàn xe.",
            "Báo hiệu từ từ cho xe đi cắt qua để bảo đảm an toàn.",
        ],
        "correct":3
    },
    {
        "image": "",
        "no": 115,
        "index": 115,
        "text": "Tại ngã ba hoặc ngã tư không có đảo an toàn, người lái xe phải nhường đường như thế nào là đúng trong các trường hợp dưới đây?",
        "tip": "Người lái xe phải nhường đường cho xe ưu tiên.",
        "answers": [
            "Nhường đường cho người đi bộ đang đi trên phần đường dành cho người đi bộ sang đường; nhường đường cho xe đi trên đường ưu tiên, đường chính từ bất kỳ hướng nào tới; nhường đường cho xe ưu tiên, xe đi từ bên phải đến.",
            "Nhường đường cho người đi bộ đang đứng chờ đi qua phần đường dành cho người đi bộ sang đường; nhường đường cho xe đi trên đường ngược chiều, đường nhánh từ bất kỳ hướng nào tới; nhường đường cho xe đi từ bên trái đến.",
            "Không phải nhường đường.",
        ],
        "correct":1
    },
    {
        "image": "",
        "no": 116,
        "index": 116,
        "text": "Khi điều khiển xe cơ giới người lái xe phải bật đèn tín hiệu rẽ nào trong các trường hợp nào sau đây?",
        "tip": "Phải bật đèn tín hiệu rẽ trước khi thay đổi làn đường.",
        "answers": [
            "Khi cho xe chạy thẳng.",
            "Trước khi thay đổi làn đường.",
            "Sau khi thay đổi làn đường.",
        ],
        "correct":2
    },
    {
        "image": "",
        "no": 117,
        "index": 117,
        "text": "Trên đoạn đường hai chiều không có giải phân cách giữa, người lái xe không được vượt xe khác trong các trường hợp nào dưới đây?",
        "tip": "Không được vượt khi xe bị vượt bất ngờ tăng tốc hoặc phát hiện có xe đi ngược chiều.",
        "answers": [
            "Xe bị vượt bất ngờ tăng tốc độ và cố tình không nhường đường.",
            "Xe bị vượt giảm tốc độ và nhường đường.",
            "Phát hiện có xe đi ngược chiều.",
            "Cả ý 1 và ý 3.",
        ],
        "correct":4
    },
    {
        "image": "",
        "no": 118,
        "index": 118,
        "text": "Khi lái xe trên đường vắng mà cảm thấy buồn ngủ, người lái xe nên chọn cách xử lý như thế nào cho phù hợp?",
        "tip": "",
        "answers": [
            "Tăng tốc độ kết hợp với nghe nhạc và đi tiếp.",
            "Quan sát và dừng xe tại nơi quy định; nghỉ cho đến khi hết buồn ngủ và đi tiếp.",
            "Sử dụng một ít rượu hoặc bia để hết buồn ngủ và đi tiếp.",
        ],
        "correct":2
    },
    {
        "image": "",
        "no": 119,
        "index": 119,
        "text": "Trên đường cao tốc, người lái xe xử lý như thế nào khi đã vượt quá lối ra của đường định rẽ?",
        "tip": "Trên cao tốc vượt quá lối rẽ thì chạy đến lối ra tiếp theo.",
        "answers": [
            "Quay xe, chạy trên lề đường bên phải và rẽ khỏi đường cao tốc.",
            "Lùi xe sát lề đường bên phải và rẽ khỏi đường cao tốc.",
            "Tiếp tục chạy đến lối ra tiếp theo.",
        ],
        "correct":3
    },
    {
        "image": "",
        "no": 120,
        "index": 120,
        "text": "Người lái xe mô tô xử lý như thế nào khi cho xe mô tô phía sau vượt?",
        "tip": "Xử lý cho xe sau vượt thì giảm tốc độ và đi về bên phải.",
        "answers": [
            "Nếu đủ điều kiện an toàn, người lái xe phải giảm tốc độ, đi sát về bên phải của phần đường xe chạy cho đến khi xe sau đã vượt qua, không được gây trở ngại đối với xe xin vượt.",
            "Lái xe vào lề đường bên trái và giảm tốc độ để xe phía sau vượt qua, không được gây trở ngại đối với xe xin vượt.",
            "Nếu đủ điều kiện an toàn, người lái xe phải tăng tốc độ, đi sát về bên phải của phần đường xe chạy cho đến khi xe sau đã vượt qua.",
        ],
        "correct":2
    },
    {
        "image": "",
        "no": 121,
        "index": 121,
        "text": "Khi xe ô tô bị hỏng tại vị trí giao nhau giữa đường bộ và đường sắt, người lái xe xử lý như thế nào?",
        "tip": "Xe hỏng tại vị trí giao nhau đường sắt thì đặt báo hiệu trên đường sắt tối thiểu 500m về hai phía.",
        "answers": [
            "Nhanh chóng đặt báo hiệu trên đường sắt cách tối thiểu 500 mét về hai phía để báo cho người điều khiển phương tiện đường sắt và tìm cách báo cho người quản lý đường sắt, nhà ga nơi gần nhất, đồng thời phải bằng mọi biện pháp nhanh chóng đưa ô tô hỏng ra khỏi phạm vi an toàn đường sắt.",
            "Nhanh chóng đặt biển cảnh báo nguy hiểm tại vị trí xe ô tô bị hỏng để đoàn tàu dừng lại.",
            "Liên hệ ngay với đơn vị cứu hộ để đưa ô tô hỏng ra khỏi phạm vi an toàn đường sắt.",
        ],
        "correct":1
    },
    {
        "image": "",
        "no": 122,
        "index": 122,
        "text": "Trong các trường hợp dưới đây, để đảm bảo an toàn khi tham gia giao thông, người lái xe mô tô cần thực hiện như thế nào?",
        "tip": "",
        "answers": [
            "Phải đội mũ bảo hiểm đạt chuẩn, có cài quai đúng quy cách, mặc quần áo gọn gàng; không sử dụng ô, điện thoại di động, thiết bị âm thanh (trừ thiết bị trợ thính).",
            "Phải đội mũ bảo hiểm khi trời mưa gió hoặc trời quá nắng; có thể sử dụng ô, điện thoại di động, thiết bị âm thanh nhưng phải đảm bảo an toàn.",
            "Phải đội mũ bảo hiểm khi cảm thấy mất an toàn giao thông hoặc khi chuẩn bị di chuyển quãng đường xa.",
        ],
        "correct":1
    },
    {
        "image": "",
        "no": 123,
        "index": 123,
        "text": "Đường bộ trong khu vực đông dân cư gồm những đoạn đường nào dưới đây?",
        "tip": "Đường bộ trong khu vực đông dân cư được xác định bằng biển báo.",
        "answers": [
            "Là đoạn đường nằm trong khu công nghiệp có đông người và phương tiện tham gia giao thông và được xác định cụ thể bằng biển chỉ dẫn địa giới.",
            "Là đoạn đường bộ nằm trong khu vực nội thành phố, nội thị xã, nội thị trấn và những đoạn đường có dân cư sinh sống sát dọc theo đường, có các hoạt động có thể ảnh hưởng đến giao thông đường bộ và được xác định bằng biển báo là đường qua khu đông dân cư.",
            "Là đoạn đường nằm ngoài khu vực nội thành phố, nội thị xã có đông người và phương tiện tham gia giao thông và được xác định cụ thể bằng biển chỉ dẫn địa giới.",
        ],
        "correct":2
    },
    {
        "image": "",
        "no": 124,
        "index": 124,
        "text": "Tốc độ tối đa cho phép đối với xe máy chuyên dùng, xe gắn máy (kể cả xe máy điện) và các loại xe tương tự trên đường bộ (trừ đường cao tốc) không được vượt quá bao nhiêu km/h?",
        "tip": "Xe gắn máy tối đa 40km/h.",
        "answers": [
            "50 km/h.",
            "40 km/h.",
            "60 km/h.",
        ],
        "correct":2
    },
    {
        "image": "",
        "no": 125,
        "index": 125,
        "text": "Trên đường bộ (trừ đường cao tốc) trong khu vực đông dân cư, đường đôi có dải phân cách giữa, xe mô tô hai bánh, ô tô chở người đến 30 chỗ tham gia giao thông với tốc độ tối đa cho phép là bao nhiêu?",
        "tip": "Có giải phân cách giữa thì được xem là đường đôi.\nTrong khu vực đông dân cư, đường đôi; đường một chiều có từ hai làn xe cơ giới trở lên: 60km/h.",
        "answers": [
            "60 km/h.",
            "50 km/h.",
            "40 km/h.",
        ],
        "correct":1
    },
    {
        "image": "",
        "no": 126,
        "index": 126,
        "text": "Trên đường bộ (trừ đường cao tốc) trong khu vực đông dân cư, đường hai chiều không có dải phân cách giữa, xe mô tô hai bánh, ô tô chở người đến 30 chỗ tham gia giao thông với tốc độ tối đa cho phép là bao nhiêu?",
        "tip": "Trong khu vực đông dân cư, đường hai chiều; đường một chiều có một làn xe cơ giới: 50km/h.",
        "answers": [
            "60 km/h.",
            "50 km/h.",
            "40 km/h.",
        ],
        "correct":2
    },
    {
        "image": "",
        "no": 127,
        "index": 127,
        "text": "Trên đường bộ (trừ đường cao tốc) trong khu vực đông dân cư, đường hai chiều hoặc đường một chiều có một làn xe cơ giới, loại xe nào tham gia giao thông với tốc độ tối đa cho phép là 50 km/h?",
        "tip": "Xe cơ giới không bao gồm xe gắn máy.\nTrong khu vực đông dân cư, đường hai chiều; đường một chiều có một làn xe cơ giới: 50km/h.",
        "answers": [
            "Ô tô con, ô tô tải, ô tô chở người trên 30 chỗ.",
            "Xe gắn máy, xe máy chuyên dùng.",
            "Cả ý 1 và ý 2.",
        ],
        "correct":1
    },
    {
        "image": "",
        "no": 128,
        "index": 128,
        "text": "Trên đường bộ (trừ đường cao tốc) trong khu vực đông dân cư, đường đôi hoặc đường một chiều có từ hai làn xe cơ giới trở lên, loại xe nào tham gia giao thông với tốc độ tối đa cho phép là 60 km/h?",
        "tip": "Xe cơ giới không bao gồm xe gắn máy.\nTrong khu vực đông dân cư, đường đôi; đường một chiều có từ hai làn xe cơ giới trở lên: 60km/h.",
        "answers": [
            "Ô tô con, ô tô tải, ô tô chở người trên 30 chỗ.",
            "Xe gắn máy, xe máy chuyên dùng.",
            "Cả ý 1 và ý 2.",
        ],
        "correct":1
    },
    {
        "image": "",
        "no": 129,
        "index": 129,
        "text": "Trên đường bộ (trừ đường cao tốc) ngoài khu vực đông dân cư, đường đôi có dải phân cách giữa, loại xe nào tham gia giao thông với tốc độ tối đa cho phép là 90 km/h?",
        "tip": "Đường có giải phân cách được xem là đường đôi.\nNgoài khu vực dân cư; đường đôi; đường một chiều có hai làn xe cơ giới trở lên: ô tô kéo rơ moóc 60km/h; mô tô, xe buýt, ôtô đầu kéo: 70km/h; xe trên 30 chỗ, xe tải trên 3,5 tấn: 80km/h; xe con, xe đến 30 chỗ, tải dưới 3,5 tấn: 90km/h.",
        "answers": [
            "Ô tô chở người trên 30 chỗ (trừ ô tô buýt), ô tô tải có trọng tải trên 3.500 kg.",
            "Xe ô tô con, xe ô tô chở người đến 30 chỗ (trừ ô tô buýt), ô tô tải có trọng tải đến 3.500 kg",
            "Ô tô buýt, ô tô đầu kéo kéo sơ mi rơ moóc, ô tô chuyên dùng, xe mô tô.",
        ],
        "correct":2
    },
    {
        "image": "",
        "no": 130,
        "index": 130,
        "text": "Trên đường bộ ngoài khu vực đông dân cư, đường đôi có dải phân cách giữa (trừ đường cao tốc), loại xe nào tham gia giao thông với tốc độ tối đa cho phép là 80 km/h?",
        "tip": "Đường có giải phân cách được xem là đường đôi.\nNgoài khu vực dân cư; đường đôi; đường một chiều có hai làn xe cơ giới trở lên: ô tô kéo rơ moóc 60km/h; mô tô, xe buýt, ôtô đầu kéo: 70km/h; xe trên 30 chỗ, xe tải trên 3,5 tấn: 80km/h; xe con, xe đến 30 chỗ, tải dưới 3,5 tấn: 90km/h.",
        "answers": [
            "Ô tô buýt; ô tô đầu kéo kéo sơ mi rơ moóc; ô tô chuyên dùng; xe mô tô.",
            "Ô tô chở người trên 30 chỗ (trừ ô tô buýt), ô tô tải có trọng tải trên 3.500 kg (trừ ô tô xi téc).",
            "Ô tô kéo rơ moóc, ô tô kéo xe khác, xe gắn máy.",
            "Xe ô tô con, xe ô tô chở người đến 30 chỗ (trừ ô tô buýt), ô tô tải có trọng tải đến 3.500 kg.",
        ],
        "correct":1
    },
    {
        "image": "",
        "no": 131,
        "index": 131,
        "text": "Trên đường bộ ngoài khu vực đông dân cư, đường đôi có dải phân cách giữa (trừ đường cao tốc), loại xe nào tham gia giao thông với tốc độ tối đa cho phép là 70 km/h?",
        "tip": "Đường có giải phân cách được xem là đường đôi.\nNgoài khu vực dân cư; đường đôi; đường một chiều có hai làn xe cơ giới trở lên: ô tô kéo rơ moóc 60km/h; mô tô, xe buýt, ôtô đầu kéo: 70km/h; xe trên 30 chỗ, xe tải trên 3,5 tấn: 80km/h; xe con, xe đến 30 chỗ, tải dưới 3,5 tấn: 90km/h.",
        "answers": [
            "Ô tô buýt; ô tô đầu kéo kéo sơ mi rơ moóc; xe mô tô; ô tô chuyên dùng (trừ ô tô trộn vữa, ô tô trộn bê tông);",
            "Ô tô kéo rơ moóc, ô tô kéo xe khác, xe gắn máy.",
            "Ô tô chở người trên 30 chỗ (trừ ô tô buýt), ô tô tải có trọng tải trên 3.500 kg",
            "Xe ô tô con, xe ô tô chở người đến 30 chỗ (trừ ô tô buýt), ô tô tải có trọng tải đến 3.500 kg.",
        ],
        "correct":1
    },
    {
        "image": "",
        "no": 132,
        "index": 132,
        "text": "Trên đường bộ ngoài khu vực đông dân cư, đường đôi có dải phân cách giữa (trừ đường cao tốc), loại xe nào tham gia giao thông với tốc độ tối đa cho phép là 60 km/h?",
        "tip": "Đường có giải phân cách được xem là đường đôi.\nNgoài khu vực dân cư; đường đôi; đường một chiều có hai làn xe cơ giới trở lên: ô tô kéo rơ moóc 60km/h; mô tô, xe buýt, ôtô đầu kéo: 70km/h; xe trên 30 chỗ, xe tải trên 3,5 tấn: 80km/h; xe con, xe đến 30 chỗ, tải dưới 3,5 tấn: 90km/h.",
        "answers": [
            "Ô tô kéo rơ moóc, ô tô kéo xe khác, ô tô trộn vữa, ô tô trộn bê tông, ô tô xi téc.",
            "Ô tô chở người trên 30 chỗ (trừ ô tô buýt), ô tô tải có trọng tải trên 3.500 kg.",
            "Xe ô tô con, xe ô tô chở người đến 30 chỗ (trừ xe buýt), ô tô tải có trọng tải nhỏ hơn hoặc bằng 3.500 kg.",
        ],
        "correct":1
    },
    {
        "image": "",
        "no": 133,
        "index": 133,
        "text": "Trên đường bộ ngoài khu vực đông dân cư, đường hai chiều không có dải phân cách giữa; đường một chiều có một làn xe cơ giới (trừ đường cao tốc), loại xe nào tham gia giao thông với tốc độ tối đa cho phép là 80 km/h?",
        "tip": "Ngoài khu vực dân cư; đường hai chiều; đường một chiều có một làn xe: ô tô kéo rơ moóc 50km/h; mô tô, xe buýt, ôtô đầu kéo: 60km/h; xe trên 30 chỗ, xe tải trên 3,5 tấn: 70km/h; xe con, xe đến 30 chỗ, tải dưới 3,5 tấn: 80km/h.",
        "answers": [
            "Ô tô kéo rơ moóc, ô tô kéo xe khác, xe gắn máy.",
            "Ô tô chở người trên 30 chỗ (trừ ô tô buýt), ô tô tải có trọng tải trên 3.500 kg.",
            "Xe ô tô con, xe ô tô chở người đến 30 chỗ (trừ xe buýt), ô tô tải có trọng tải nhỏ hơn hoặc bằng 3.500 kg.",
        ],
        "correct":3
    },
    {
        "image": "",
        "no": 134,
        "index": 134,
        "text": "Trên đường bộ ngoài khu vực đông dân cư, đường hai chiều không có dải phân cách giữa; đường một chiều có một làn xe cơ giới (trừ đường cao tốc), loại xe nào tham gia giao thông với tốc độ tối đa cho phép là 70 km/h?",
        "tip": "Ngoài khu vực dân cư; đường hai chiều; đường một chiều có một làn xe: ô tô kéo rơ moóc 50km/h; mô tô, xe buýt, ôtô đầu kéo: 60km/h; xe trên 30 chỗ, xe tải trên 3,5 tấn: 70km/h; xe con, xe đến 30 chỗ, tải dưới 3,5 tấn: 80km/h.",
        "answers": [
            "Ô tô kéo rơ moóc, ô tô kéo xe khác, xe gắn máy.",
            "Ô tô chở người trên 30 chỗ (trừ ô tô buýt), ô tô tải có trọng tải trên 3.500 kg (trừ ô tô xi téc).",
            "Xe ô tô con, xe ô tô chở người đến 30 chỗ (trừ xe buýt), ô tô tải có trọng tải nhỏ hơn hoặc bằng 3.500 kg.",
        ],
        "correct":2
    },
    {
        "image": "",
        "no": 135,
        "index": 135,
        "text": "Trên đường bộ ngoài khu vực đông dân cư, đường hai chiều không có dải phân cách giữa; đường một chiều có một làn xe cơ giới (trừ đường cao tốc), loại xe nào tham gia giao thông với tốc độ tối đa cho phép là 60 km/h?",
        "tip": "Ngoài khu vực dân cư; đường hai chiều; đường một chiều có một làn xe: ô tô kéo rơ moóc 50km/h; mô tô, xe buýt, ôtô đầu kéo: 60km/h; xe trên 30 chỗ, xe tải trên 3,5 tấn: 70km/h; xe con, xe đến 30 chỗ, tải dưới 3,5 tấn: 80km/h.",
        "answers": [
            "Ô tô kéo rơ moóc, ô tô kéo xe khác, xe gắn máy.",
            "Ô tô chở người trên 30 chỗ (trừ ô tô buýt), ô tô tải có trọng tải trên 3.500 kg.",
            "Ô tô buýt, ô tô đầu kéo kéo sơ mi rơ moóc, xe mô tô, ô tô chuyên dùng (trừ ô tô trộn vữa, ô tô trộn bê tông).",
        ],
        "correct":3
    },
    {
        "image": "",
        "no": 136,
        "index": 136,
        "text": "Trên đường bộ ngoài khu vực đông dân cư, đường hai chiều không có dải phân cách giữa; đường một chiều có một làn xe cơ giới (trừ đường cao tốc), loại xe nào tham gia giao thông với tốc độ tối đa cho phép là 50 km/h?",
        "tip": "Ngoài khu vực dân cư; đường hai chiều; đường một chiều có một làn xe: ô tô kéo rơ moóc 50km/h; mô tô, xe buýt, ôtô đầu kéo: 60km/h; xe trên 30 chỗ, xe tải trên 3,5 tấn: 70km/h; xe con, xe đến 30 chỗ, tải dưới 3,5 tấn: 80km/h.",
        "answers": [
            "Ô tô kéo rơ moóc, ô tô kéo xe khác, xe gắn máy.",
            "Ô tô chở người trên 30 chỗ (trừ ô tô buýt), ô tô tải có trọng tải trên 3.500 kg.",
            "Ô tô kéo rơ moóc, ô tô kéo xe khác, ô tô trộn vữa, ô tô trộn bê tông, ô tô xi téc.",
        ],
        "correct":3
    },
    {
        "image": "",
        "no": 137,
        "index": 137,
        "text": "Khi tham gia giao thông trên đoạn đường không có biển báo \"Cự ly tối thiểu giữa hai xe\", với điều kiện mặt đường khô ráo, xe cơ giới đang chạy với tốc độ từ trên 60 km/h đến 80 km/h, người lái xe phải duy trì khoảng cách an toàn với xe đang chạy phía trước tối thiểu là bao nhiêu?",
        "tip": "Khoảng cách an toàn: 60km/h: 35m; 60 đến 80km/h: 55m; 80 đến 100km/h: 70m; 100 đến 120km/h: 100m.",
        "answers": [
            "35 m.",
            "55 m.",
            "70 m.",
        ],
        "correct":2
    },
    {
        "image": "",
        "no": 138,
        "index": 138,
        "text": "Khi tham gia giao thông trên đoạn đường không có biển báo \"Cự ly tối thiểu giữa hai xe\", với điều kiện mặt đường khô ráo, xe cơ giới đang chạy với tốc độ từ trên 80 km/h đến 100 km/h, người lái xe phải duy trì khoảng cách an toàn với xe đang chạy phía trước tối thiểu là bao nhiêu?",
        "tip": "Khoảng cách an toàn: 60km/h: 35m; 60 đến 80km/h: 55m; 80 đến 100km/h: 70m; 100 đến 120km/h: 100m.",
        "answers": [
            "35 m.",
            "55 m.",
            "70 m.",
        ],
        "correct":3
    },
    {
        "image": "",
        "no": 139,
        "index": 139,
        "text": "Khi tham gia giao thông trên đoạn đường không có biển báo \"Cự ly tối thiểu giữa hai xe\", với điều kiện mặt đường khô ráo, xe cơ giới đang chạy với tốc độ từ trên 100 km/h đến dưới 120 km/h, người lái xe phải duy trì khoảng cách an toàn với xe đang chạy phía trước tối thiểu là bao nhiêu?",
        "tip": "Khoảng cách an toàn: 60km/h: 35m; 60 đến 80km/h: 55m; 80 đến 100km/h: 70m; 100 đến 120km/h: 100m.",
        "answers": [
            "55 m.",
            "70 m.",
            "100 m.",
        ],
        "correct":3
    },
    {
        "image": "",
        "no": 140,
        "index": 140,
        "text": "Khi điều khiển xe chạy với tốc độ dưới 60 km/h, người lái xe phải chủ động điều khiển xe như thế nào để đảm bảo an toàn giao thông?",
        "tip": "Khoảng cách an toàn dưới 60km/h: Chủ động và đảm bảo khoảng cách.",
        "answers": [
            "Chủ động giữ khoảng cách an toàn phù hợp với xe chạy liền trước xe của mình.",
            "Đảm bảo khoảng cách an toàn theo mật độ phương tiện, tình hình giao thông thực tế.",
            "Cả ý 1 và ý 2.",
        ],
        "correct":3
    },
    {
        "image": "",
        "no": 141,
        "index": 141,
        "text": "Người lái xe phải giảm tốc độ thấp hơn tốc độ đến mức cần thiết, chú ý quan sát và chuẩn bị sẵn sàng những tình huống có thế xảy ra để phòng ngừa tai nạn trong các trường hợp nào dưới đây?",
        "tip": "Giảm tốc độ, chú ý quan sát khi gặp biển báo nguy hiểm.",
        "answers": [
            "Gặp biển báo nguy hiểm trên đường.",
            "Gặp biển chỉ dẫn trên đường.",
            "Gặp biển báo hết mọi lệnh cấm.",
            "Gặp biển báo hết hạn chế tốc độ tối đa cho phép.",
        ],
        "correct":1
    },
    {
        "image": "",
        "no": 142,
        "index": 142,
        "text": "Người lái xe phải giảm tốc độ, đi sát về bên phải của phần đường xe chạy trong các trường hợp nào dưới đây?",
        "tip": "Giảm tốc độ, đi sát về bên phải khi xe sau xin vượt.",
        "answers": [
            "Khi vượt xe khác.",
            "Khi vượt xe khác tại đoạn đường được phép vượt.",
            "Khi xe sau xin vượt và đảm bảo an toàn.",
            "Khi xe sau có tín hiệu vượt bên phải.",
        ],
        "correct":3
    },
    {
        "image": "",
        "no": 143,
        "index": 143,
        "text": "Tại các điểm giao cắt giữa đường bộ và đường sắt, quyền ưu tiên thuộc về loại phương tiện nào dưới đây?",
        "tip": "Điểm giao cắt đường sắt thì ưu tiên đường sắt.",
        "answers": [
            "Xe cứu hỏa.",
            "Xe cứu thương.",
            "Phương tiện giao thông đường sắt.",
            "Ô tô, mô tô và xe máy chuyên dùng.",
        ],
        "correct":3
    },
    {
        "image": "",
        "no": 144,
        "index": 144,
        "text": "Các phương tiện tham gia giao thông đường bộ (kể cả những xe có quyền ưu tiên) đều phải dừng lại bên phải đường của mình và trước vạch \"dừng xe\" tại các điểm giao cắt giữa đường bộ và đường sắt khi có báo hiệu dừng nào dưới đây?",
        "tip": "",
        "answers": [
            "Hiệu lệnh của nhân viên gác chắn.",
            "Đèn đỏ sáng nháy, cờ đỏ, biển đỏ.",
            "Còi, chuông kêu, chắn đã đóng.",
            "Tất cả các ý trên.",
        ],
        "correct":4
    },
    {
        "image": "",
        "no": 145,
        "index": 145,
        "text": "Trên đoạn đường bộ giao nhau đồng mức với đường sắt, người không có nhiệm vụ có được tự ý mở chắn đường ngang khi chắn đã đóng hay không?",
        "tip": "",
        "answers": [
            "Không được phép.",
            "Được phép nhưng phải đảm bảo an toàn.",
            "Được phép tùy từng hoàn cảnh và điều kiện cụ thể.",
        ],
        "correct":1
    },
    {
        "image": "",
        "no": 146,
        "index": 146,
        "text": "Tác dụng của mũ bảo hiểm đối với người ngồi trên xe mô tô hai bánh trong trường hợp xảy ra tai nạn giao thông là gì?",
        "tip": "",
        "answers": [
            "Để làm đẹp.",
            "Để tránh mưa nắng",
            "Để giảm thiểu chấn thương vùng đầu.",
            "Để các loại phương tiện khác dễ quan sát.",
        ],
        "correct":3
    },
    {
        "image": "",
        "no": 147,
        "index": 147,
        "text": "Khi điều khiển phương tiện tham gia giao thông, những hành vi nào dưới đây bị nghiêm cấm?",
        "tip": "",
        "answers": [
            "Thay đổi tốc độ của xe trên đường bộ.",
            "Thay đổi tay số của xe trên đường bộ.",
            "Lạng lách, đánh võng trên đường bộ.",
        ],
        "correct":3
    },
    {
        "image": "",
        "no": 148,
        "index": 148,
        "text": "Người lái xe phải nhanh chóng giảm tốc độ, tránh hoặc dừng lại sát lề đường bên phải để nhường đường cho các xe nào nêu dưới đây?",
        "tip": "Nhường đường cho xe ưu tiên có tín hiệu còi, cờ, đèn.",
        "answers": [
            "Xe chữa cháy, xe quân sự, xe công an, xe cứu thương, xe hộ đê sau khi thực hiện nhiệm vụ khẩn cấp, không có tín hiệu còi, cờ, đèn theo quy định của pháp luật.",
            "Xe chữa cháy, xe quân sự, xe công an, xe cứu thương, xe hộ đê đi làm nhiệm vụ khẩn cấp có tín hiệu còi, cờ, đèn theo quy định của pháp luật.",
            "Xe ô tô, xe máy, đoàn xe đang diễu hành có tổ chức có báo tín hiệu xin vượt bằng còi và đèn.",
        ],
        "correct":2
    },
    {
        "image": "",
        "no": 149,
        "index": 149,
        "text": "Tại nơi đường giao nhau, người lái xe đang đi trên đường không ưu tiên phải xử lý như thế nào là đúng quy tắc giao thông?",
        "tip": "Xe trên đường không ưu tiên nhường đường cho xe trên đường ưu tiên.",
        "answers": [
            "Tăng tốc độ qua đường giao nhau để đi trước xe đi trên đường ưu tiên.",
            "Giảm tốc độ qua đường giao nhau để đi trước xe đi trên đường ưu tiên.",
            "Nhường đường cho xe đi trên đường ưu tiên từ bất kỳ hướng nào tới.",
        ],
        "correct":3
    },
    {
        "image": "",
        "no": 150,
        "index": 150,
        "text": "Khi xe ô tô, mô tô đến gần vị trí giao nhau giữa đường bộ và đường sắt không có rào chắn, khi đèn tín hiệu màu đỏ đã bật sáng hoặc khi có tiếng chuông báo hiệu, người lái xe xử lý như thế nào?",
        "tip": "Đứng cách ray đường sắt 5m.",
        "answers": [
            "Giảm tốc độ cho xe vượt qua đường sắt.",
            "Nhanh chóng cho xe vượt qua đường sắt trước khi tàu hỏa tới.",
            "Giảm tốc độ cho xe vượt qua đường sắt trước khi tàu hỏa tới.",
            "Cho xe dừng ngay lại và giữ khoảng cách tối thiểu 5 mét tính từ ray gần nhất.",
        ],
        "correct":4
    },
    {
        "image": "",
        "no": 151,
        "index": 151,
        "text": "Khi điều khiển xe trên đường vòng, khuất tầm nhìn người lái xe cần phải làm gì để đảm bảo an toàn?",
        "tip": "Không vượt xe khác trên đường vòng, khuất tầm nhìn.",
        "answers": [
            "Đi đúng làn đường, đúng tốc độ quy định, không được vượt xe khác.",
            "Đi sang làn đường của xe ngược chiều để mở rộng tầm nhìn và vượt xe khác.",
            "Cho xe đi sát bên phải làn đường, bật tín hiệu báo hiệu để vượt bên phải xe khác.",
        ],
        "correct":1
    },
    {
        "image": "",
        "no": 152,
        "index": 152,
        "text": "Người lái xe phải xử lý như thế nào khi quan sát phía trước thấy người đi bộ đang sang đường tại nơi có vạch đường dành cho người đi bộ để đảm bảo an toàn?",
        "tip": "Nơi có vạch kẻ đường dành cho người đi bộ thì nhường đường.",
        "answers": [
            "Giảm tốc độ, đi từ từ để vượt qua trước người đi bộ.",
            "Giảm tốc độ, có thể dừng lại nếu cần thiết trước vạch dừng xe để nhường đường cho người đi bộ qua đường.",
            "Tăng tốc độ để vượt qua trước người đi bộ.",
        ],
        "correct":2
    },
    {
        "image": "",
        "no": 153,
        "index": 153,
        "text": "Khi muốn lùi xe nhưng không quan sát được phía sau, cần phải làm gì để đảm bảo an toàn?",
        "tip": "Không quan sát được phía sau thì không lùi xe.",
        "answers": [
            "Phải lùi thật chậm.",
            "Có thể được lùi xe nhưng phải mở cửa xe.",
            "Không được lùi xe.",
            "Bấm còi 3 lần liên tiếp trước khi lùi.",
        ],
        "correct":3
    },
    {
        "image": "",
        "no": 154,
        "index": 154,
        "text": "Người điều khiển phương tiện tham gia giao thông đường bộ phải giảm tốc độ để có thể dừng lại một cách an toàn trong các trường hợp nào dưới đây?",
        "tip": "Giảm tốc độ khi có người đi bộ qua đường và qua trạm cảnh sát giao thông.",
        "answers": [
            "Khi có người đi bộ, xe lăn của người khuyết tật qua đường; đến gần bến xe buýt, điểm dừng đỗ xe có khách đang lên, xuống xe.",
            "Khi điều khiển phương tiện đi qua khu vực trạm kiểm soát tải trọng xe, trạm cảnh sát giao thông, trạm giao dịch thanh toán đối với các phương tiện sử dụng đường bộ.",
            "Cả ý 1 và ý 2.",
        ],
        "correct":3
    },
    {
        "image": "",
        "no": 155,
        "index": 155,
        "text": "Tại những đoạn đường không bố trí biển báo hạn chế tốc độ, không bố trí biển báo khoảng cách an toàn tối thiểu giữa hai xe, người điều khiển phương tiện tham gia giao thông phải thực hiện quy định nào dưới đây để đảm bảo an toàn giao thông?",
        "tip": "Nghiêm chỉnh chấp hành quy định về tốc độ và khoảng cách an toàn.",
        "answers": [
            "Người điều khiển phương tiện tham gia giao thông không hạn chế tốc độ và khoảng cách an toàn tối thiểu giữa hai xe.",
            "Người điều khiển phương tiện tham gia giao thông không hạn chế tốc độ và khoảng cách an toàn tối thiểu giữa hai xe vào ban đêm.",
            "Người điều khiển phương tiện tham gia giao thông phải nghiêm chỉnh chấp hành quy định về tốc độ, khoảng cách an toàn tối thiểu giữa hai xe.",
        ],
        "correct":3
    },
    {
        "image": "",
        "no": 156,
        "index": 156,
        "text": "Khi tham gia giao thông trên đường cao tốc, người lái xe, người điều khiển xe máy chuyên dùng phải thực hiện các quy định như thế nào là đúng quy tắc giao thông?",
        "tip": "Trên cao tốc tuân thủ tốc độ tối thiểu, tối đa và sơn kẻ mặt đường.",
        "answers": [
            "Tuân thủ tốc độ tối đa, tốc độ tối thiểu ghi trên biển báo hiệu đường bộ, sơn kẻ mặt đường trên các làn xe.",
            "Tuân thủ tốc độ tối đa, tốc độ tối thiểu ghi trên biển báo hiệu đường bộ, sơn kẻ mặt đường trên các làn xe chỉ vào ban ngày.",
            "Tuân thủ tốc độ tối đa, tốc độ tối thiểu ghi trên biển báo hiệu đường bộ, sơn kẻ mặt đường trên các làn xe chỉ vào ban đêm.",
        ],
        "correct":1
    },
    {
        "image": "",
        "no": 157,
        "index": 157,
        "text": "Theo Luật Giao thông đường bộ, tín hiệu đèn giao thông gồm 3 màu nào dưới đây?",
        "tip": "",
        "answers": [
            "Đỏ - Vàng - Xanh",
            "Cam - Vàng - Xanh.",
            "Vàng - Xanh dương - Xanh lá.",
            "Đỏ - Cam - Xanh.",
        ],
        "correct":1
    },
    {
        "image": "",
        "no": 158,
        "index": 158,
        "text": "Tại nơi đường giao nhau, khi đèn điều khiển giao thông có tín hiệu màu vàng, người điều khiển phương tiện giao thông phải chấp hành như thế nào là đúng quy tắc giao thông?",
        "tip": "Đèn vàng dừng lại trước vạch dừng hoặc nhấp nháy thì đi chậm.",
        "answers": [
            "Phải cho xe dừng lại trước vạch dừng, trường hợp đã đi quá vạch dừng hoặc đã quá gần vạch dừng nếu dừng lại thấy nguy hiểm thì được đi tiếp.",
            "Trong trường hợp tín hiệu vàng nhấp nháy là được đi nhưng phải giảm tốc độ, chú ý quan sát nhường đường cho người đi bộ qua đường.",
            "Nhanh chóng tăng tốc độ, vượt qua nút giao và chú ý đảm bảo an toàn.",
            "Cả ý 1 và ý 2.",
        ],
        "correct":4
    },
    {
        "image": "",
        "no": 159,
        "index": 159,
        "text": "Để báo hiệu cho xe phía trước biết xe mô tô của bạn muốn vượt, bạn phải có tín hiệu như thế nào dưới đây?",
        "tip": "Muốn vượt xe thì phải báo hiệu bằng đèn hoặc còi.",
        "answers": [
            "Ra hiệu bằng tay rồi cho xe vượt qua.",
            "Tăng ga mạnh để gây sự chú ý rồi cho xe vượt qua.",
            "Bạn phải có báo hiệu bằng đèn hoặc còi.",
        ],
        "correct":3
    },
    {
        "image": "",
        "no": 160,
        "index": 160,
        "text": "Khi tham gia giao thông trên đường cao tốc, người điều khiển phương tiện cơ giới có được dừng, đỗ xe trên phần đường xe chạy hay không?",
        "tip": "Không được dừng, đỗ trên làn xe chạy đường cao tốc.",
        "answers": [
            "Được dừng, đỗ.",
            "Không được dừng, đỗ.",
            "Được dừng, đỗ nhưng phải đảm bảo an toàn",
        ],
        "correct":2
    },
    {
        "image": "",
        "no": 161,
        "index": 161,
        "text": "Khi xe gặp sự cố kỹ thuật trên đường cao tốc, bạn phải xử lý theo thứ tự như thế nào dưới đây để đảm bảo an toàn giao thông?",
        "tip": "Khi gặp sự cố khi đủ điều kiện an toàn đưa xe vào làn dừng đỗ khẩn cấp.",
        "answers": [
            "Bật đèn tín hiệu khẩn cấp, dừng xe ngay lập tức và đặt biển báo hiệu nguy hiểm để cảnh báo cho các xe khác.",
            "Bật đèn tín hiệu khẩn cấp, lập tức đưa xe vào làn đường xe chạy bên phải trong cùng,  đặt biển báo hiệu nguy hiểm để cảnh báo cho các xe khác.",
            "Bật đèn tín hiệu khẩn cấp, khi đủ điều kiện an toàn nhanh chóng đưa xe vào làn dừng đỗ khẩn cấp, đặt biển báo hiệu nguy hiểm để cảnh báo cho các xe khác",
        ],
        "correct":3
    },
    {
        "image": "",
        "no": 162,
        "index": 162,
        "text": "Khi người lái xe ô tô dừng, đỗ sát theo lề đường, hè phố phía bên phải theo chiều đi của mình, bánh xe gần nhất không được cách xa lề đường, hè phố quá bao nhiêu mét trong các trường hợp dưới đây để không gây cản trở, nguy hiểm cho giao thông?",
        "tip": "Dừng xe, đỗ xe cách lề đường, hè phố không quá 0,25 mét.",
        "answers": [
            "0,25 mét.",
            "0,3 mét.",
            "0,4 mét.",
            "0,5 mét.",
        ],
        "correct":1
    },
    {
        "image": "",
        "no": 163,
        "index": 163,
        "text": "Khi dừng, đỗ xe trên đường phố hẹp, người lái xe ô tô phải dừng, đỗ xe ở vị trí cách xe ô tô đang đỗ bên kia đường khoảng cách tối thiểu là bao nhiêu mét trong các trường hợp dưới đây để đảm bảo an toàn giao thông?",
        "tip": "Dừng xe, đỗ xe trên đường hẹp cách xe khác 20 mét.",
        "answers": [
            "5 mét.",
            "10 mét.",
            "15 mét.",
            "20 mét.",
        ],
        "correct":4
    },
    {
        "image": "",
        "no": 164,
        "index": 164,
        "text": "Trên đường bộ, người lái xe ô tô có được phép dừng xe, đỗ xe song song với một xe khác đang dừng, đỗ hay không?",
        "tip": "Không được dừng, đỗ xe song song với xe khác trên đường.",
        "answers": [
            "Được phép.",
            "Không được phép.",
            "Chỉ được phép dừng, đỗ khi đường vắng.",
        ],
        "correct":2
    },
    {
        "image": "",
        "no": 165,
        "index": 165,
        "text": "Người điều khiển xe mô tô phải giảm tốc độ và hết sức thận trọng khi qua những đoạn đường nào dưới đây?",
        "tip": "Giảm tốc độ trên đường ướt, đường hẹp và đèo dốc.",
        "answers": [
            "Đường ướt, đường có sỏi cát trên nền đường.",
            "Đường hẹp có nhiều điểm giao cắt từ hai phía.",
            "Đường đèo dốc, vòng liên tục",
            "Tất cả các ý nêu trên.",
        ],
        "correct":4
    },
    {
        "image": "",
        "no": 166,
        "index": 166,
        "text": "Khi gặp xe buýt đang dừng đón, trả khách, người điều khiển xe mô tô phải xử lý như thế nào dưới đây để đảm bảo an toàn giao thông?",
        "tip": "Xe buýt đang dừng đón trả khách thì giảm tốc độ và từ từ vượt qua xe buýt.",
        "answers": [
            "Tăng tốc độ để nhanh chóng vượt qua bến đỗ.",
            "Giảm tốc độ đến mức an toàn có thể và quan sát người qua đường và từ từ vượt qua xe buýt.",
            "Yêu cầu phải dừng lại phía sau xe buýt chờ xe rời bến mới đi tiếp.",
        ],
        "correct":2
    },
    {
        "image": "",
        "no": 167,
        "index": 167,
        "text": "Người lái xe khách, xe buýt cần thực hiện những nhiệm vụ gì dưới đây?",
        "tip": "Lái xe khách, xe buýt thực hiện nghiêm biểu đồ chạy xe được phân công.",
        "answers": [
            "Luôn có ý thức về tính tổ chức, kỷ luật, thực hiện nghiêm biểu đồ xe chạy được phân công; thực hiện đúng hành trình, lịch trình, đón trả khách đúng nơi quy định; giúp đỡ hành khách khi đi xe, đặc biệt là những người khuyết tật, người già, trẻ em và phụ nữ có thai, có con nhỏ.",
            "Luôn có ý thức về tính tổ chức, kỷ luật, thực hiện linh hoạt biểu đồ xe chạy được phân công để tiết kiệm chi phí; thực hiện đúng hành trình, lịch trình khi có khách đi xe, đón trả khách ở những nơi thuận tiện cho hành khách đi xe.",
        ],
        "correct":1
    },
    {
        "image": "",
        "no": 168,
        "index": 168,
        "text": "Trong hoạt động vận tải đường bộ, các hành vi nào sau đây bị nghiêm cấm?",
        "tip": "Nghiêm cấm vận chuyển hàng cấm lưu thông.",
        "answers": [
            "Vận chuyển hàng nguy hiểm nhưng có giấy phép.",
            "Vận chuyển động vật hoang dã nhưng thực hiện đủ các quy định có liên quan.",
            "Vận chuyển hàng cấm lưu thông; vận chuyển trái phép hàng nguy hiểm, động vật hoang dã.",
        ],
        "correct":3
    },
    {
        "image": "",
        "no": 169,
        "index": 169,
        "text": "Trong hoạt động vận tải khách, những hành vi nào dưới đây bị nghiêm cấm?",
        "tip": "Nghiêm cấm đe dọa, xúc phạm, tranh giành, lôi kéo hành khách.",
        "answers": [
            "Cạnh tranh nhau nhằm tăng lợi nhuận.",
            "Giảm giá để thu hút khách.",
            "Đe dọa, xúc phạm, tranh giành, lôi kéo hành khách; bắt ép hành khách sử dụng dịch vụ ngoài ý muốn; xuống khách nhằm trốn tránh phát hiện xe chở quá số người quy định.",
            "Tất cả các ý trên.",
        ],
        "correct":3
    },
    {
        "image": "",
        "no": 170,
        "index": 170,
        "text": "Thời gian làm việc của người lái xe ô tô không được lái xe liên tục quá bao nhiêu giờ trong trường hợp dưới đây?",
        "tip": "Không lái xe liên tục quá 4 giờ.",
        "answers": [
            "Không quá 4 giờ.",
            "Không quá 6 giờ.",
            "Không quá 8 giờ.",
            "Liên tục tùy thuộc vào sức khỏe và khả năng của người lái xe.",
        ],
        "correct":1
    },
    {
        "image": "",
        "no": 171,
        "index": 171,
        "text": "Thời gian làm việc trong một ngày của người lái xe ô tô không được vượt quá bao nhiêu giờ trong trường hợp dưới đây?",
        "tip": "Không làm việc 1 ngày của lái xe quá 10 giờ.",
        "answers": [
            "Không quá 8 giờ.",
            "Không quá 10 giờ.",
            "Không quá 12 giờ.",
            "Không hạn chế tùy thuộc vào sức khỏe và khả năng của người lái xe.",
        ],
        "correct":2
    },
    {
        "image": "",
        "no": 172,
        "index": 172,
        "text": "Người lái xe khách phải chấp hành những quy định nào dưới đây?",
        "tip": "Cả ý 1 và ý 2 đều đúng. Bởi vì không thể chở hành khách trên mui được, nên ý 3 sai.",
        "answers": [
            "Đón, trả khách đúng nơi quy định, không chở hành khách trên mui, trong khoang hành lý hoặc để hành khách đu bám bên ngoài xe.",
            "Không chở hàng nguy hiểm, hàng có mùi hôi thối hoặc động vật, hàng hóa khác có ảnh hưởng đến sức khỏe của hành khách.",
            "Chở hành khách trên mui; đề hàng hóa trong khoang chở khách, chở quá số người theo quy định.",
            "Cả ý 1 và ý 2.",
        ],
        "correct":4
    },
    {
        "image": "",
        "no": 173,
        "index": 173,
        "text": "Lái xe kinh doanh vận tải khách phải có trách nhiệm gì sau đây?",
        "tip": "Cả ý 1 và ý 2 đều đúng. Bởi vì không thể tự do trả khách theo yêu cầu được.",
        "answers": [
            "Kiểm tra các điều kiện bảo đảm an toàn của xe trước khi khởi hành; kiểm tra việc sắp xếp, chằng buộc hành lý, hàng hóa bảo đảm an toàn.",
            "Đóng cửa lên xuống của xe trước và trong khi xe chạy.",
            "Đón trả khách tại vị trí do khách hàng yêu cầu.",
            "Cả ý 1 và ý 2.",
        ],
        "correct":4
    },
    {
        "image": "",
        "no": 174,
        "index": 174,
        "text": "Người kinh doanh vận tải hành khách có những quyền hạn nào dưới đây?",
        "tip": "Người kinh doanh vận tải không thể tự ý thay đổi vị trí đón, nên đáp án 2 là đáp án đúng.",
        "answers": [
            "Tự ý thay đổi vị trí đón, trả khách theo hợp đồng vận chuyển hoặc đón thêm người ngoài danh sách hành khách đã ký.",
            "Từ chối vận chuyển trước khi phương tiện rời bến, rời vị trí đón trả khách theo hợp đồng vận chuyển những người đã có vé hoặc người trong danh sách hợp đồng có hành vi gây rối trật tự công cộng, gây cản trở công việc kinh doanh vận tải, ảnh hưởng đến sức khỏe, tài sản của người khác, gian lận vé hoặc hành khách đang bị dịch bệnh nguy hiểm.",
            "Cả ý 1 và ý 2.",
        ],
        "correct":2
    },
    {
        "image": "",
        "no": 175,
        "index": 175,
        "text": "Hành khách có các quyền gì khi đi trên xe ô tô vận tải khách theo tuyến cố định?",
        "tip": "Hành khách được miễn cước hành lý không quá 20kg.",
        "answers": [
            "Được vận chuyển theo đúng hợp đồng vận tải, cam kết của người kinh doanh về chất lượng vận tải; được miễn cước hành lý với trọng lượng không quá 20kg và với kích thước phù hợp với thiết kế của xe; được từ chối chuyến đi trước khi phương tiện khởi hành và được trả lại tiền vé theo quy định của Bộ Giao thông vận tải.",
            "Được vận chuyển theo hợp đồng vận tải, cam kết của người kinh doanh về vận tải; được miễn cước hành lý với trọng lượng không quá 50 kg và với kích thước không quá cồng kềnh; được từ chối chuyến đi trước khi phương tiện khởi hành và được trả lại tiền vé.",
        ],
        "correct":1
    },
    {
        "image": "",
        "no": 176,
        "index": 176,
        "text": "Hành khách có các nghĩa vụ gì khi đi trên xe ô tô vận tải hành khách?",
        "tip": "Hành khách không thể mang theo hàng hóa cấm lưu thông nên đáp án 1 là đáp án đúng.",
        "answers": [
            "Mua vé và trả cước, phí vận tải hành lý mang theo quá mức quy định; có mặt tại nơi xuất phát đúng thời gian thỏa thuận; chấp hành quy định về vận chuyển; thực hiện đúng hướng dẫn của lái xe, nhân viên phục vụ trên xe về các quy định bảo đảm trật tự, an toàn giao thông.",
            "Được mang theo hành lý, hàng hóa mà pháp luật cấm lưu thông khi đã trả cước, phí vận tải.",
            "Cả ý 1 và ý 2.",
        ],
        "correct":1
    },
    {
        "image": "",
        "no": 177,
        "index": 177,
        "text": "Người kinh doanh vận tải hàng hóa có các quyền gì ở dưới đây?",
        "tip": "Người kinh doanh vận tải không thể yêu cầu xếp hàng hóa quá chiều cao quy định hay quá tải trọng nên đáp án 1 là đáp án đúng.",
        "answers": [
            "Yêu cầu người thuê vận tải cung cấp thông tin cần thiết về hàng hóa để ghi vào giấy vận chuyển và có quyền kiểm tra tính xác thực của các thông tin đó.",
            "Yêu cầu xếp hàng hóa vận chuyển trên xe vượt quá chiều cao quy định nhưng phải được chằng buộc chắc chắn.",
            "Yêu cầu xếp hàng hóa vượt tải trọng 10%.",
        ],
        "correct":1
    },
    {
        "image": "",
        "no": 178,
        "index": 178,
        "text": "Người kinh doanh vận tải hàng hóa có các nghĩa vụ gì dưới đây?",
        "tip": "Nghĩa vụ bồi thường thiệt hại do mất mát, hư hỏng.",
        "answers": [
            "Cung cấp phương tiện và thực hiện thời gian, địa điểm giao hàng hóa cho người nhận hàng theo điều kiện của người kinh doanh vận tải; chịu trách nhiệm về hậu quả mà người làm công, người đại diện gây ra do thực hiện yêu cầu của người kinh doanh vận tải phù hợp với quy định của pháp luật.",
            "Bồi thường thiệt hại cho người thuê vận tải do mất mát, hư hỏng hàng hóa xảy ra trong quá trình vận tải từ lúc nhận hàng đến lúc giao hàng; bồi thường thiệt hại do người làm công, người đại diện gây ra trong khi thực hiện công việc được người kinh doanh vận tải giao; chịu trách nhiệm về hậu quả mà người làm công, người đại diện gây ra do thực hiện yêu cầu của người kinh doanh vận tải trái với quy định của pháp luật.",
            "Cả ý 1 và ý 2.",
        ],
        "correct":2
    },
    {
        "image": "",
        "no": 179,
        "index": 179,
        "text": "Người thuê vận tải hàng hóa có các quyền hạn gì dưới đây?",
        "tip": "Người thuê vận tải có quyền từ chối nếu phương tiện không đúng thỏa thuận trong hợp đồng.",
        "answers": [
            "Từ chối xếp hàng lên phương tiện mà phương tiện đó không đúng thỏa thuận trong hợp đồng; yêu cầu người kinh doanh vận tải giao hàng đúng thời gian, địa điểm đã thỏa thuận trong hợp đồng; yêu cầu người kinh doanh vận tải bồi thường thiệt hại theo quy định của pháp luật.",
            "Từ chối xếp hàng hóa lên phương tiện khi thấy phương tiện đó không phù hợp với yêu cầu; yêu cầu người kinh doanh vận tải giao hàng trước thời hạn đã thỏa thuận trong hợp đồng; yêu cầu người kinh doanh vận tải bồi thường thiệt hại khi người kinh doanh vận tải gây thiệt hại.",
        ],
        "correct":1
    },
    {
        "image": "",
        "no": 180,
        "index": 180,
        "text": "Người thuê vận tải hàng hóa có các nghĩa vụ gì dưới đây?",
        "tip": "Người thuê vận tải chuẩn bị đầy đủ giấy tờ hợp pháp về hàng hóa.",
        "answers": [
            "Chuẩn bị đầy đủ các giấy tờ hợp pháp về hàng hóa trước khi giao hàng hóa cho người kinh doanh vận tải; đóng gói hàng hóa đúng quy cách, ghi ký hiệu, mã hiệu hàng hóa đầy đủ, rõ ràng; giao hàng hóa cho người kinh doanh vận tải đúng thời gian, địa điểm và nội dung khác ghi trong giấy gửi hàng.",
            "Chuẩn bị đầy đủ các giấy tờ hợp pháp về phương tiện vận chuyển hàng hoá và giao cho người lái xe; xếp hàng hóa lên phương tiện vận chuyển đảm bảo an toàn; giao hàng hóa cho người nhận hàng đúng thời gian, địa điểm.",
            "Cả ý 1 và ý 2.",
        ],
        "correct":1
    },
    {
        "image": "",
        "no": 181,
        "index": 181,
        "text": "Người nhận hàng có các quyền gì dưới đây?",
        "tip": "Người nhận hàng có quyền yêu cầu thanh toán chi phí phát sinh do giao hàng chậm.",
        "answers": [
            "Nhận và kiểm tra hàng hóa nhận được theo giấy vận chuyển hoặc chứng từ tương đương khác; yêu cầu người kinh doanh vận tải thanh toán chi phí phát sinh do giao hàng hóa chậm.",
            "Yêu cầu hoặc thông báo cho người thuê vận tải để yêu cầu người lái xe bồi thường thiệt hại do mất mát, hư hỏng hàng hóa; nhận hàng hóa không theo giấy vận chuyển hoặc chứng từ tương đương khác.",
            "Cả ý 1 và ý 2.",
        ],
        "correct":1
    },
    {
        "image": "",
        "no": 182,
        "index": 182,
        "text": "Người nhận hàng có các nghĩa vụ gì dưới đây?",
        "tip": "Cả 2 ý 1 và 2 đều đúng với nghĩa vụ của người nhận hàng.",
        "answers": [
            "Nhận hàng hóa đúng thời gian, địa điểm đã thỏa thuận.",
            "Xuất trình giấy vận chuyển và giấy tờ tùy thân cho người kinh doanh vận tải trước khi nhận hàng hóa; thanh toán chi phí phát sinh do nhận hàng chậm.",
            "Cả ý 1 và ý 2.",
        ],
        "correct":3
    },
    {
        "image": "",
        "no": 183,
        "index": 183,
        "text": "Hàng siêu trường, siêu trọng được hiểu như thế nào là đúng?",
        "tip": "Hàng siêu trường, siêu trọng không thể tháo rời.",
        "answers": [
            "Là hàng có kích thước vượt quá kích thước và trọng lượng của xe.",
            "Là hàng có kích thước hoặc trọng lượng vượt quá giới hạn quy định nhưng có thể tháo rời.",
            "Là hàng có kích thước hoặc trọng lượng vượt quá giới hạn quy định nhưng không thể tháo rời ra được.",
        ],
        "correct":3
    },
    {
        "image": "",
        "no": 184,
        "index": 184,
        "text": "Việc vận chuyển động vật sống phải tuân theo những quy định nào dưới đây?",
        "tip": "Vận chuyển động vật sống có thể cần chăm sóc và chịu trách nhiệm xếp dỡ động vật sống.",
        "answers": [
            "Tùy theo loại động vật sống, người kinh doanh vận tải yêu cầu người thuê vận tải áp tải để chăm sóc trong quá trình vận tải.",
            "Người thuê vận tải chịu trách nhiệm về việc xếp dỡ động vật sống theo hướng dẫn của người kinh doanh vận tải; trường hợp người thuê vận tải không thực hiện được thì phải trả cước, phí xếp, dỡ cho người kinh doanh vận tải.",
            "Cả ý 1 và ý 2.",
        ],
        "correct":3
    },
    {
        "image": "",
        "no": 185,
        "index": 185,
        "text": "Xe vận chuyển hàng nguy hiểm phải chấp hành những quy định nào dưới đây?",
        "tip": "Vận chuyển hàng nguy hiểm phải có giấy phép.",
        "answers": [
            "Phải có giấy phép do cơ quan có thẩm quyền cấp, xe vận chuyển hàng nguy hiểm không được dừng, đỗ nơi đông người, những nơi dễ xảy ra nguy hiểm.",
            "Phải được chuyên chở trên xe chuyên dùng để vận chuyển hàng nguy hiểm; xe vận chuyển hàng nguy hiểm phải chạy liên tục không được dừng, đỗ trong quá trình vận chuyển.",
            "Cả ý 1 và ý 2.",
        ],
        "correct":1
    },
    {
        "image": "",
        "no": 186,
        "index": 186,
        "text": "Trong đô thị, người lái xe buýt, xe chở hàng phải thực hiện những quy định nào dưới đây?",
        "tip": "Xe buýt phải chạy đúng tuyến.",
        "answers": [
            "Người lái xe buýt phải chạy đúng tuyến, đúng lịch trình và dừng đỗ đúng nơi quy định; người lái xe chở hàng phải hoạt động đúng tuyến, phạm vi và thời gian quy định đối với từng loại xe.",
            "Người lái xe buýt, xe chở hàng đón, trả khách, hàng hóa theo thỏa thuận giữa hành khách, chủ hàng và người lái xe.",
        ],
        "correct":1
    },
    {
        "image": "",
        "no": 187,
        "index": 187,
        "text": "Việc vận chuyển hàng hóa bằng xe ô tô phải chấp hành các quy định nào dưới đây?",
        "tip": "Vận chuyển hàng hóa phải xếp đặt gọn hàng và che đậy, không để rơi vãi.",
        "answers": [
            "Hàng vận chuyển trên xe phải được xếp đặt gọn gàng và chằng buộc chắc chắn.",
            "Khi vận chuyển hàng rời phải che đậy, không để rơi vãi.",
            "Cả ý 1 và ý 2.",
        ],
        "correct":3
    },
    {
        "image": "q188",
        "no": 188,
        "index": 188,
        "text": "Những ký hiệu hàng hóa dưới đây, ký hiệu nào chống mưa?",
        "tip": "Hình 1 tránh ánh nắng mặt trời; Hình 2 tránh mưa; Hình 3 là hàng dễ vỡ.",
        "answers": [
            "Hình 1.",
            "Hình 2.",
            "Hình 3.",
        ],
        "correct":2
    },
    {
        "image": "q189.webp",
        "no": 189,
        "index": 189,
        "text": "Ký hiệu chuyên dùng nào biểu hiện hàng chuyên chở phải tránh ánh nắng mặt trời?",
        "tip": "Hình 1 tránh ánh nắng mặt trời; Hình 2 tránh mưa.",
        "answers": [
            "Hình 1.",
            "Hình 2.",
        ],
        "correct":1
    },
    {
        "image": "q190.webp",
        "no": 190,
        "index": 190,
        "text": "Hình nào dưới đây biểu hiện hàng chuyên chở dễ vỡ phải cẩn thận?",
        "tip": "Hình 1 là hàng dễ vỡ; Hình 2 là hàng chất lỏng.",
        "answers": [
            "Hình 1",
            "Hình 2",
        ],
        "correct":1
    },
    {
        "image": "q191.webp",
        "no": 191,
        "index": 191,
        "text": "Hình nào dưới đây đòi hỏi hàng phải xếp theo hướng thẳng đứng?",
        "tip": "Hình 1 tránh ánh nắng mặt trời; Hình 2 là hàng dễ vỡ; Hình 3 hàng để thẳng đứng lên.",
        "answers": [
            "Hình 1.",
            "Hình 2.",
            "Hình 3.",
        ],
        "correct":3
    },
    {
        "image": "q192.webp",
        "no": 192,
        "index": 192,
        "text": "Hình nào dưới đây biểu hiện hàng chuyên chở là chất lỏng?",
        "tip": "Hình 1 là hàng dễ vỡ; Hình 2 là hàng chất lỏng.",
        "answers": [
            "Hình 1.",
            "Hình 2.",
        ],
        "correct":2
    },
    {
        "image": "",
        "no": 193,
        "index": 193,
        "text": "Người hành nghề lái xe khi thực hiện tốt việc rèn luyện, nâng cao trách nhiệm, đạo đức nghề nghiệp sẽ thu được kết quả như thế nào?",
        "tip": "Giải thích: Người hành nghề lái xe khi thực hiện tốt việc rèn luyện, nâng cao trách nhiệm và đạo đức nghề nghiệp sẽ được khách hàng, xã hội tôn trọng; được đồng nghiệp quý mến và giúp đỡ; được doanh nghiệp tin dùng và đóng góp nhiều cho xã hội. Đồng thời, điều này cũng thu hút khách hàng, góp phần quan trọng trong xây dựng thương hiệu và kinh doanh có hiệu quả cao.",
        "answers": [
            "Được khách hàng, xã hội tôn trọng; được đồng nghiệp quý mến, giúp đỡ; được doanh nghiệp tin dùng và đóng góp nhiều cho xã hội.",
            "Thu hút được khách hàng, góp phần quan trọng trong xây dựng thương hiệu, kinh doanh có hiệu quả cao.",
            "Cả ý 1 và ý 2.",
        ],
        "correct":3
    },
    {
        "image": "",
        "no": 194,
        "index": 194,
        "text": "Người lái xe vận tải hàng hóa cần thực hiện những nhiệm vụ gì ghi ở dưới đây?",
        "tip": "Nhiệm vụ không chở hàng cấm.",
        "answers": [
            "Thực hiện nghiêm chỉnh những nội dung hợp đồng giữa chủ phương tiện với chủ hàng trong việc vận chuyển và bảo quản hàng hóa trong quá trình vận chuyển; không chở hàng cấm, không xếp hàng quá trọng tải của xe, quá trọng tải cho phép của cầu, đường; khi vận chuyển hàng quá khổ, quá tải, hàng nguy hiểm, hàng siêu trường, siêu trọng phải có giấy phép.",
            "Thực hiện nghiêm chỉnh những nội dung hợp đồng giữa chủ hàng với khách hàng trong việc vận chuyển và bảo quản hàng hóa trong quá trình vận chuyển; trong trường hợp cần thiết có thể xếp hàng quá trọng tải của xe, quá trọng tải cho phép của cầu theo yêu cầu của chủ hàng; khi vận chuyển hàng quá khổ, quá tải, hàng nguy hiểm, hàng siêu trường, siêu trọng phải được chủ hàng cho phép.",
        ],
        "correct":1
    },
    {
        "image": "",
        "no": 195,
        "index": 195,
        "text": "Người lái xe kinh doanh vận tải cần thực hiện những công việc gì ghi ở dưới đây để thường xuyên rèn luyện nâng cao đạo đức nghề nghiệp?",
        "tip": "Người lái xe kinh doanh vận tải cần thực hiện cả hai ý để nâng cao đạo đức nghề nghiệp. Họ cần yêu quý, quản lý và sử dụng xe tốt, bảo dưỡng xe đúng định kỳ, thực hành tiết kiệm vật tư và nhiên liệu. Đồng thời, họ phải nắm vững và chấp hành các quy định của pháp luật, lái xe an toàn, coi hành khách như người thân và là đối tác tin cậy, có ý thức tổ chức kỷ luật và tinh thần hợp tác, tương trợ đồng nghiệp.",
        "answers": [
            "Phải yêu quý xe, quản lý và sử dụng xe tốt; bảo dưỡng xe đúng định kỳ; thực hành tiết kiệm vật tư, nhiên liệu; luôn tu dưỡng bản thân, có lối sống lành mạnh, tác phong làm việc công nghiệp.",
            "Nắm vững các quy định của pháp luật, tự giác chấp hành pháp luật, lái xe an toàn; coi hành khách như người thân, là đối tác tin cậy; có ý thức tổ chức kỷ luật và xây dựng doanh nghiệp vững mạnh; có tinh thần hợp tác, tương trợ, giúp đỡ đồng nghiệp.",
            "Cả ý 1 và ý 2.",
        ],
        "correct":3
    },
    {
        "image": "",
        "no": 196,
        "index": 196,
        "text": "Người lái xe và nhân viên phục vụ trên xe ô tô vận tải hành khách phải có những trách nhiệm gì theo quy định được ghi ở dưới đây?",
        "tip": "Người lái xe và nhân viên phục vụ trên ô tô vận tải hành khách phải kiểm tra các điều kiện bảo đảm an toàn của xe trước khi khởi hành, có thái độ văn minh, lịch sự, hướng dẫn hành khách ngồi đúng nơi quy định và kiểm tra việc sắp xếp, chằng buộc hành lý để đảm bảo an toàn. Đồng thời, họ phải có biện pháp bảo vệ tính mạng, sức khỏe, tài sản của hành khách, giữ gìn trật tự và vệ sinh trong xe, và đảm bảo cửa lên xuống của xe được đóng trước và trong khi xe chạy.",
        "answers": [
            "Kiểm tra các điều kiện bảo đảm an toàn của xe sau khi khởi hành; có trách nhiệm lái xe thật nhanh khi chậm giờ của khách.",
            "Kiểm tra các điều kiện bảo đảm an toàn của xe trước khi khởi hành; có thái độ văn minh, lịch sự, hướng dẫn hành khách ngồi đúng nơi quy định; kiểm tra việc sắp xếp, chằng buộc hành lý, bảo đảm an toàn.",
            "Có biện pháp bảo vệ tính mạng, sức khỏe, tài sản của hành khách đi xe, giữ gìn trật tự, vệ sinh trong xe; đóng cửa lên xuống của xe trước và trong khi xe chạy.",
            "Cả ý 2 và ý 3.",
        ],
        "correct":4
    },
    {
        "image": "",
        "no": 197,
        "index": 197,
        "text": "Khái niệm về văn hóa giao thông được hiểu như thế nào là đúng?",
        "tip": "hái niệm về văn hóa giao thông bao gồm cả sự hiểu biết và chấp hành nghiêm chỉnh pháp luật về giao thông, ý thức trách nhiệm với cộng đồng khi tham gia giao thông, và ứng xử có văn hóa, có tình yêu thương con người trong các tình huống không may xảy ra khi tham gia giao thông.",
        "answers": [
            "Là sự hiểu biết và chấp hành nghiêm chỉnh pháp luật về giao thông; là ý thức trách nhiệm với cộng đồng khi tham gia giao thông.",
            "Là ứng xử có văn hóa, có tình yêu thương con người trong các tình huống không may xảy ra khi tham gia giao thông.",
            "Cả ý 1 và ý 2.",
        ],
        "correct":3
    },
    {
        "image": "",
        "no": 198,
        "index": 198,
        "text": "Trên làn đường dành cho ô tô có vũng nước lớn, có nhiều người đi xe mô tô trên làn đường bên cạnh, người lái xe ô tô xử lý như thế nào là có văn hóa giao thông?",
        "tip": "Người lái xe ô tô cần giảm tốc độ và cho xe chạy chậm qua vũng nước để tránh làm bắn nước vào những người đi xe mô tô bên cạnh, thể hiện ý thức và văn hóa giao thông.",
        "answers": [
            "Cho xe chạy thật nhanh qua vũng nước.",
            "Giảm tốc độ cho xe chạy chậm qua vũng nước.",
            "Giảm tốc độ cho xe chạy qua làn đường dành cho mô tô để tránh vũng nước.",
        ],
        "correct":2
    },
    {
        "image": "",
        "no": 199,
        "index": 199,
        "text": "Người lái xe cố tình không phân biệt làn đường, vạch phân làn, phóng nhanh, vượt ẩu, vượt đèn đỏ, đi vào đường cấm, đường một chiều được coi là hành vi nào trong các hành vi dưới đây?",
        "tip": "",
        "answers": [
            "Là bình thường.",
            "Là thiếu văn hóa giao thông.",
            "Là có văn hóa giao thông.",
        ],
        "correct":2
    },
    {
        "image": "",
        "no": 200,
        "index": 200,
        "text": "Khi sơ cứu người bị tai nạn giao thông đường bộ, có vết thương chảy máu ngoài, màu đỏ tươi phun thành tia và phun mạnh khi mạch đập, bạn phải làm gì?",
        "tip": "Khi sơ cứu người bị tai nạn giao thông với vết thương chảy máu ngoài, màu đỏ tươi phun thành tia và phun mạnh khi mạch đập, cần thực hiện cầm máu không trực tiếp (chặn động mạch) để ngăn chặn dòng máu lưu thông và giảm nguy cơ mất máu nghiêm trọng.",
        "answers": [
            "Thực hiện cầm máu trực tiếp.",
            "Thực hiện cầm máu không trực tiếp (chặn động mạch).",
        ],
        "correct":2
    },
    {
        "image": "",
        "no": 201,
        "index": 201,
        "text": "Người lái xe có văn hóa khi tham gia giao thông phải đáp ứng các điều kiện nào dưới đây?",
        "tip": "",
        "answers": [
            "Có trách nhiệm với bản thân và với cộng đồng; tôn trọng, nhường nhịn người khác.",
            "Tận tình giúp đỡ người tham gia giao thông gặp hoạn nạn; giúp đỡ người khuyết tật, trẻ em và người cao tuổi.",
            "Cả ý 1 và ý 2.",
        ],
        "correct":""
    },
    {
        "image": "",
        "no": 202,
        "index": 202,
        "text": "Trong các hành vi dưới đây, người lái xe mô tô có văn hóa giao thông phải ứng xử như thế nào?",
        "tip": "",
        "answers": [
            "Điều khiển xe đi trên phần đường, làn đường có ít phương tiện tham gia giao thông, chỉ đội mũ bảo hiểm ở nơi có biển báo bắt buộc đội mũ bảo hiểm.",
            "Chấp hành quy định về tốc độ, đèn tín hiệu, biển báo hiệu, vạch kẻ đường khi lái xe; chấp hành hiệu lệnh, chỉ dẫn của người điều khiển giao thông; nhường đường cho người đi bộ, người già, trẻ em, người khuyết tật.",
            "Cả ý 1 và ý 2.",
        ],
        "correct":""
    },
    {
        "image": "",
        "no": 203,
        "index": 203,
        "text": "Trong các hành vi dưới đây, người lái xe mô tô có văn hóa giao thông phải ứng xử như thế nào?",
        "tip": "",
        "answers": [
            "Điều khiển xe đi bên phải theo chiều đi của mình; đi đúng phần đường, làn đường quy định; đội mũ bảo hiểm đạt chuẩn, cài quai đúng quy cách.",
            "Điều khiển xe đi trên phần đường, làn đường có ít phương tiện tham gia giao thông",
            "Đội mũ bảo hiểm ở nơi có biển báo bắt buộc đội mũ bảo hiểm",
        ],
        "correct":""
    },
    {
        "image": "",
        "no": 204,
        "index": 204,
        "text": "Trong các hành vi dưới đây, người lái xe ô tô có văn hóa giao thông phải ứng xử như thế nào?",
        "tip": "",
        "answers": [
            "Điều khiển xe đi bên phải theo chiều đi của mình; đi đúng phần đường, làn đường quy định; dừng, đỗ xe đúng nơi quy định; đã uống rượu, bia thì không lái xe.",
            "Điều khiển xe đi trên phần đường, làn đường có ít phương tiện giao thông; dừng xe, đỗ xe ở nơi thuận tiện hoặc theo yêu cầu của hành khách, của người thân.",
            "Dừng và đỗ xe ở nơi thuận tiện cho việc giao nhận hành khách và hàng hóa; sử dụng ít rượu, bia thì có thể lái xe.",
        ],
        "correct":""
    },
    {
        "image": "",
        "no": 205,
        "index": 205,
        "text": "Người có văn hóa giao thông khi điều khiển xe cơ giới tham gia giao thông đường bộ phải đảm bảo các điều kiện gì?",
        "tip": "",
        "answers": [
            "Có giấy phép lái xe phù hợp với loại xe được phép điều khiển; xe cơ giới đảm bảo các quy định về chất lượng, an toàn kỹ thuật và bảo vệ môi trường.",
            "Có giấy chứng nhận bảo hiểm trách nhiệm dân sự của chủ xe cơ giới còn hiệu lực; nộp phí sử dụng đường bộ theo quy định.",
            "Cả ý 1 và ý 2.",
        ],
        "correct":""
    },
    {
        "image": "",
        "no": 206,
        "index": 206,
        "text": "Khi xảy ra tai nạn giao thông, người lái xe và người có mặt tại hiện trường vụ tai nạn phải thực hiện các công việc gì dưới đây?",
        "tip": "",
        "answers": [
            "Đặt các biển cảnh báo hoặc vật báo hiệu ở phía trước và phía sau hiện trường xảy ra tai nạn để cảnh báo; kiểm tra khả năng xảy ra hỏa hoạn do nhiên liệu bị rò rỉ; bảo vệ hiện trường vụ tai nạn và cấp cứu người bị thương.",
            "Đặt các biển cảnh báo hoặc vật báo hiệu ở phía trên nóc xe xảy ra tai nạn để cảnh báo; kiểm tra khả năng xảy ra mất an toàn do nước làm mát bị rò rỉ; di chuyển hiện trường vụ tai nạn để giao thông thông suốt.",
            "Cả ý 1 và ý 2.",
        ],
        "correct":""
    },
    {
        "image": "",
        "no": 207,
        "index": 207,
        "text": "Khi xảy ra tai nạn giao thông, có người bị thương nghiêm trọng, người lái xe và người có mặt tại hiện trường vụ tai nạn phải thực hiện các công việc gì?",
        "tip": "",
        "answers": [
            "Thực hiện sơ cứu ban đầu trong trường hợp khẩn cấp; thông báo vụ tai nạn đến cơ quan thi hành pháp luật.",
            "Nhanh chóng lái xe gây tai nạn hoặc đi nhờ xe khác ra khỏi hiện trường vụ tai nạn.",
            "Cả ý 1 và ý 2.",
        ],
        "correct":""
    },
    {
        "image": "",
        "no": 208,
        "index": 208,
        "text": "Khi sơ cứu ban đầu cho người bị tai nạn giao thông đường bộ không còn hô hấp, người lái xe và người có mặt tại hiện trường vụ tai nạn phải thực hiện các công việc gì?",
        "tip": "",
        "answers": [
            "Đặt nạn nhân nằm ngửa, khai thông đường thở của nạn nhân.",
            "Thực hiện các biện pháp hô hấp nhân tạo.",
            "Cả ý 1 và ý 2.",
        ],
        "correct":""
    },
    {
        "image": "",
        "no": 209,
        "index": 209,
        "text": "Hành vi bỏ trốn sau khi gây tai nạn để trốn tránh trách nhiệm hoặc khi có điều kiện mà cố ý không cứu giúp người bị tai nạn giao thông có bị nghiêm cấm hay không?",
        "tip": "",
        "answers": [
            "Không bị nghiêm cấm.",
            "Nghiêm cấm tùy từng trường hợp cụ thể.",
            "Bị nghiêm cấm.",
        ],
        "correct":""
    },
    {
        "image": "",
        "no": 210,
        "index": 210,
        "text": "Khi xảy ra tai nạn giao thông, những hành vi nào dưới đây bị nghiêm cấm?",
        "tip": "",
        "answers": [
            "Xâm phạm tính mạng, sức khoẻ, tài sản của người bị nạn và người gây tai nạn.",
            "Bỏ trốn sau khi gây ra tai nạn để trốn tránh trách nhiệm.",
            "Cả ý 1 và ý 2.",
        ],
        "correct":""
    },
    {
        "image": "",
        "no": 211,
        "index": 211,
        "text": "Khi xảy ra tai nạn giao thông, những hành vi nào dưới đây bị nghiêm cấm?",
        "tip": "",
        "answers": [
            "Xâm phạm tính mạng, sức khỏe, tài sản của người bị nạn và người gây tai nạn.",
            "Sơ cứu người bị nạn khi cơ quan có thẩm quyền chưa cho phép.",
            "Sơ cứu người gây tai nạn khi cơ quan có thẩm quyền chưa cho phép.",
        ],
        "correct":""
    },
    {
        "image": "",
        "no": 212,
        "index": 212,
        "text": "Trong đoạn đường hai chiều tại khu đông dân cư đang ùn tắc, người điều khiển xe mô tô hai bánh có văn hóa giao thông sẽ lựa chọn xử lý tình huống nào dưới đây?",
        "tip": "",
        "answers": [
            "Cho xe lấn sang làn ngược chiều để nhanh chóng thoát khỏi nơi ùn tắc.",
            "Điều khiển xe lên vỉa hè để nhanh chóng thoát khỏi nơi ùn tắc.",
            "Kiên nhẫn tuân thủ hướng dẫn của người điều khiển giao thông hoặc tín hiệu giao thông, di chuyển trên đúng phần đường bên phải theo chiều đi, nhường đường cho các phương tiện đi ngược chiều để nút tắc nhanh chóng được giải tỏa.",
        ],
        "correct":""
    },
    {
        "image": "",
        "no": 213,
        "index": 213,
        "text": "Trên đường đang xảy ra ùn tắc những hành vi nào sau đây là thiếu văn hóa khi tham gia giao thông?",
        "tip": "",
        "answers": [
            "Bấm còi liên tục thúc giục các phương tiện phía trước nhường đường.",
            "Đi lên vỉa hè, tận dụng mọi khoảng trống để nhanh chóng thoát khỏi nơi ùn tắc.",
            "Lấn sang làn đường bên trái cố gắng vượt lên xe khác",
            "Tất cả các ý nêu trên.",
        ],
        "correct":""
    },
    {
        "image": "",
        "no": 214,
        "index": 214,
        "text": "Khi điều khiển xe mô tô tay ga xuống đường dốc dài, độ dốc cao, người lái xe cần thực hiện các thao tác nào dưới đây để đảm bảo an toàn?",
        "tip": "Xe mô tô xuống dốc dài cần sử dụng cả phanh trước và phanh sau để giảm tốc độ.",
        "answers": [
            "Giữ tay ga ở mức độ phù hợp, sử dụng phanh trước và phanh sau để giảm tốc độ.",
            "Nhả hết tay ga, tắt động cơ, sử dụng phanh trước và phanh sau để giảm tốc độ.",
            "Sử dụng phanh trước để giảm tốc độ kết hợp với tắt chìa khóa điện của xe.",
        ],
        "correct":""
    },
    {
        "image": "",
        "no": 215,
        "index": 215,
        "text": "Khi vào số để khởi hành xe ô tô có số tự động, người lái xe phải thực hiện các thao tác nào để đảm bảo an toàn?",
        "tip": "Khởi hành xe ô tô số tự động cần đạp phanh chân hết hành trình.",
        "answers": [
            "Đạp bàn đạp phanh chân hết hành trình, vào số và nhả phanh tay nếu có, kiểm tra lại xem có bị nhầm số không rồi mới cho xe lăn bánh.",
            "Đạp bàn đạp để tăng ga với mức độ phù hợp, vào số và kiểm tra lại xem có bị nhầm số không rồi mới cho xe lăn bánh.",
        ],
        "correct":""
    },
    {
        "image": "",
        "no": 216,
        "index": 216,
        "text": "Khi nhả hệ thống phanh dừng cơ khí điều khiển bằng tay (phanh tay), người lái xe cần phải thực hiện các thao tác nào?",
        "tip": "Thực hiện phanh tay cần phải bóp khóa hãm đẩy cần phanh tay về phía trước.",
        "answers": [
            "Dùng lực tay phải kéo cần phanh tay về phía sau hết hành trình; nếu khóa hãm bị kẹt cứng phải đẩy mạnh phanh tay về phía trước, sau đó bóp khóa hãm.",
            "Dùng lực tay phải bóp khóa hãm đẩy cần phanh tay về phía trước hết hành trình; nếu khóa hãm bị kẹt cứng phải kéo cần phanh tay về phía sau đồng thời bóp khóa hãm.",
            "Dùng lực tay phải đẩy cần phanh tay về phía trước hết hành trình; nếu khóa hãm bị kẹt cứng phải đẩy mạnh cần phanh tay về phía trước, sau đó bóp khóa hãm.",
        ],
        "correct":""
    },
    {
        "image": "",
        "no": 217,
        "index": 217,
        "text": "Khi khởi hành ô tô sử dụng hộp số cơ khí trên đường bằng, người lái xe cần thực hiện các thao tác nào theo trình tự dưới đây?",
        "tip": "Khởi hành ô tô sử dụng hộp số đạp côn hết hành trình; vào số 1.",
        "answers": [
            "Kiểm tra an toàn xung quanh xe ô tô; nhả từ từ đến 1/2 hành trình bàn đạp ly hợp (côn) và giữ trong khoảng 3 giây; vào số 1; nhả hết phanh tay, báo hiệu bằng còi, đèn trước khi xuất phát; tăng ga đủ để xuất phát, sau đó vừa tăng ga vừa nhả hết ly hợp để cho xe ô tô chuyển động.",
            "Kiểm tra an toàn xung quanh xe ô tô; đạp ly hợp (côn) hết hành trình; vào số 1; nhả hết phanh tay, báo hiệu bằng còi, đèn trước khi xuất phát; tăng ga đủ để xuất phát; nhả từ từ đến 1/2 hành trình bàn đạp ly hợp và giữ trong khoảng 3 giây, sau đó vừa tăng ga vừa nhả hết ly hợp (côn) để cho xe ô tô chuyển động.",
        ],
        "correct":""
    },
    {
        "image": "",
        "no": 218,
        "index": 218,
        "text": "Khi quay đầu xe, người lái xe cần phải quan sát và thực hiện các thao tác nào để đảm bảo an toàn giao thông?",
        "tip": "Đưa đầu xe về phía nguy hiểm, đuôi xe về phía an toàn.",
        "answers": [
            "Quan sát biển báo hiệu để biết nơi được phép quay đầu; quan sát kỹ địa hình nơi chọn để quay đầu; lựa chọn quỹ đạo quay đầu xe cho thích hợp; quay đầu xe với tốc độ thấp; thường xuyên báo tín hiệu để người, các phương tiện xung quanh được biết; nếu quay đầu xe ở nơi nguy hiểm thì đưa đầu xe về phía nguy hiểm đưa đuôi xe về phía an toàn.",
            "Quan sát biển báo hiệu để biết nơi được phép quay đầu; quan sát kỹ địa hình nơi chọn để quay đầu; lựa chọn quỹ đạo quay đầu xe; quay đầu xe với tốc độ tối đa; thường xuyên báo tín hiệu để người, các phương tiện xung quanh được biết; nếu quay đầu xe ở nơi nguy hiểm thì đưa đuôi xe về phía nguy hiểm và đầu xe về phía an toàn.",
        ],
        "correct":""
    },
    {
        "image": "",
        "no": 219,
        "index": 219,
        "text": "Khi tránh nhau trên đường hẹp, người lái xe cần phải chú ý những điểm nào để đảm bảo an toàn giao thông?",
        "tip": "Cả ý 1 và ý 2 đều đúng. Ý 3 tránh nhau ban đêm bật đèn pha là sai.",
        "answers": [
            "Không nên đi cố vào đường hẹp; xe đi ở phía sườn núi nên dừng lại trước để nhường đường; khi dừng xe nhường đường phải đỗ ngay ngắn.",
            "Trong khi tránh nhau không nên đổi số; khi tránh nhau ban đêm, phải tắt đèn pha bật đèn cốt.",
            "Khi tránh nhau ban đêm, phải thường xuyên bật đèn pha tắt đèn cốt.",
            "Cả ý 1 và ý 2.",
        ],
        "correct":""
    },
    {
        "image": "",
        "no": 220,
        "index": 220,
        "text": "Khi điều khiển ô tô lên dốc cao, người lái xe cần thực hiện các thao tác nào?",
        "tip": "Ô tô lên dốc cao cần về số thấp từ chân dốc.",
        "answers": [
            "Tăng lên số cao từ chân dốc, điều chỉnh ga cho xe nhanh lên dốc; đến gần đỉnh dốc phải tăng ga để xe nhanh chóng qua dốc; về số thấp, đi sát về phía bên phải đường, có tín hiệu (còi, đèn) để báo cho người lái xe đi ngược chiều biết.",
            "Về số thấp từ chân dốc, điều chỉnh ga cho xe từ từ lên dốc; đến gần đỉnh dốc phải đi chậm, đi sát về phía bên phải đường, có tín hiệu (còi, đèn) để báo cho người lái xe đi ngược chiều biết.",
        ],
        "correct":""
    },
    {
        "image": "",
        "no": 221,
        "index": 221,
        "text": "Khi điều khiển ô tô xuống dốc cao, người lái xe cần thực hiện các thao tác nào dưới đây để đảm bảo an toàn?",
        "tip": "Ô tô xuống dốc cao cần về số thấp.",
        "answers": [
            "Tăng lên số cao, nhả bàn đạp ga ở mức độ phù hợp, kết hợp với phanh chân để khống chế tốc độ.",
            "Về số thấp, nhả bàn đạp ga ở mức độ phù hợp, kết hợp với phanh chân để khống chế tốc độ.",
            "Về số không (N), nhả bàn đạp ga ở mức độ phù hợp, kết hợp với phanh chân để khống chế tốc độ.",
        ],
        "correct":""
    },
    {
        "image": "",
        "no": 222,
        "index": 222,
        "text": "Khi xuống dốc, muốn dừng xe, người lái xe cần thực hiện các thao tác nào để đảm bảo an toàn?",
        "tip": "Khi xuống dốc muốn dừng xe thì có tín hiệu rẽ phải, điều khiển xe vào lề đường bên phải.",
        "answers": [
            "Có tín hiệu rẽ phải, điều khiển xe sát vào lề đường bên phải; đạp phanh sớm và mạnh hơn lúc dừng xe trên đường bằng để xe đi với tốc độ chậm đến mức dễ dàng dừng lại được; về số 1, đạp nửa ly hợp (côn) cho xe đến chỗ dừng; khi xe đã dừng, về số không (N), đạp phanh chân và kéo phanh tay.",
            "Có tín hiệu rẽ phải, điều khiển xe sát vào lề đường bên trái; đạp hết hành trình ly hợp (côn) và nhả bàn đạp ga để xe đi với tốc độ chậm đến mức dễ dàng dừng lại được tại chỗ dừng; khi xe đã dừng, đạp và giữ phanh chân.",
            "Có tín hiệu rẽ trái, điều khiển xe sát vào lề đường bên phải; đạp phanh sớm và mạnh hơn lúc dừng xe trên đường bằng để xe đi với tốc độ chậm đến mức dễ dàng dừng lại được; về số không (N) để xe đi đến chỗ dừng, khi xe đã dừng, kéo phanh tay.",
        ],
        "correct":""
    },
    {
        "image": "",
        "no": 223,
        "index": 223,
        "text": "Khi điều khiển xe trên đường vòng người lái xe cần phải làm gì để đảm bảo an toàn?",
        "tip": "Điều khiển xe trên đường vòng cần giảm tốc độ.",
        "answers": [
            "Quan sát cẩn thận các chướng ngại vật và báo hiệu bằng còi, đèn; giảm tốc độ tới mức cần thiết, về số thấp và thực hiện quay vòng với tốc độ phù hợp với bán kính cong của đường vòng.",
            "Quan sát cẩn thận các chướng ngại vật và báo hiệu bằng còi, đèn; tăng tốc để nhanh chóng qua đường vòng và giảm tốc độ sau khi qua đường vòng.",
        ],
        "correct":""
    },
    {
        "image": "",
        "no": 224,
        "index": 224,
        "text": "Khi điều khiển xe ô tô rẽ phải ở chỗ đường giao nhau, người lái xe cần thực hiện các thao tác nào để đảm bảo an toàn?",
        "tip": "Điều khiển xe rẽ phải thì bám sát vào phía phải đường và giảm tốc độ.",
        "answers": [
            "Có tín hiệu rẽ phải; quan sát an toàn phía sau; điều khiển xe sang làn đường bên trái; giảm tốc độ và quan sát an toàn phía bên phải để điều khiển xe qua chỗ đường giao nhau.",
            "Cách chỗ rẽ một khoảng cách an toàn có tín hiệu rẽ phải; quan sát an toàn phía sau; điều khiển xe bám sát vào phía phải đường; giảm tốc độ và quan sát an toàn phía bên phải để điều khiển xe qua chỗ đường giao nhau.",
            "Cách chỗ rẽ một khoảng cách an toàn có tín hiệu rẽ phải; quan sát an toàn phía sau; điều khiển xe bám sát vào phía phải đường; tăng tốc độ và quan sát an toàn phía bên trái để điều khiển xe qua chỗ đường giao nhau.",
        ],
        "correct":""
    },
    {
        "image": "",
        "no": 225,
        "index": 225,
        "text": "Khi điều khiển xe ô tô rẽ trái ở chỗ đường giao nhau, người lái xe cần thực hiện các thao tác nào để đảm bảo an toàn?",
        "tip": "Điều khiển xe rẽ trái thì giảm tốc độ.",
        "answers": [
            "Cách chỗ rẽ một khoảng cách an toàn giảm tốc độ, có tín hiệu rẽ trái xin đổi làn đường; quan sát an toàn xung quanh đặc biệt là bên trái; đổi sang làn đường bên trái; cho xe chạy chậm tới phía trong của tâm đường giao nhau mới rẽ trái để điều khiển xe qua chỗ đường giao nhau.",
            "Cách chỗ rẽ một khoảng cách an toàn có tín hiệu rẽ trái, tăng tốc độ để xe nhanh chóng qua chỗ đường giao nhau; có tín hiệu xin đổi làn đường; quan sát an toàn xung quanh đặc biệt là bên trái; đổi làn đường sang phải để mở rộng vòng cua.",
        ],
        "correct":""
    },
    {
        "image": "",
        "no": 226,
        "index": 226,
        "text": "Khi điều khiển xe sử dụng hộp số cơ khí vượt qua rãnh lớn cắt ngang mặt đường, người lái xe cần thực hiện các thao tác nào để đảm bảo an toàn?",
        "tip": "Điều khiển xe số tay qua rãnh lớn thì gài số một (1), và không tăng số cho đến khi qua khỏi rãnh.",
        "answers": [
            "Gài số một (1) và từ từ cho hai bánh xe trước xuống rãnh, tăng ga cho hai bánh xe trước vượt lên khỏi rãnh, tăng số, tăng tốc độ để bánh xe sau vượt qua rãnh.",
            "Tăng ga, tăng số để hai bánh xe trước và bánh xe sau vượt qua khỏi rãnh và chạy bình thường.",
            "Gài số một (1) và từ từ cho hai bánh xe trước xuống rãnh, tăng ga cho hai bánh xe trước vượt lên khỏi rãnh, tiếp tục để bánh xe sau từ từ xuống rãnh rồi tăng dần ga cho xe ô tô lên khỏi rãnh.",
        ],
        "correct":""
    },
    {
        "image": "",
        "no": 227,
        "index": 227,
        "text": "Khi điều khiển xe qua đường sắt, người lái xe cần phải thực hiện các thao tác nào dưới đây để đảm bảo an toàn?",
        "tip": "",
        "answers": [
            "Khi có chuông báo hoặc thanh chắn đã hạ xuống, người lái xe phải dừng xe tạm thời đúng khoảng cách an toàn, kéo phanh tay nếu đường dốc hoặc phải chờ lâu.",
            "Khi không có chuông báo hoặc thanh chắn không hạ xuống, người lái xe phải quan sát nếu thấy đủ điều kiện an toàn thì về số thấp, tăng ga nhẹ để tránh động cơ chết máy cho xe vượt qua.",
            "Cả ý 1 và ý 2.",
        ],
        "correct":""
    },
    {
        "image": "",
        "no": 228,
        "index": 228,
        "text": "Khi điều khiển xe ô tô tự đổ, người lái xe cần chú ý những điểm gì để đảm bảo an toàn?",
        "tip": "Xe ben khi đang chạy thì phải hạ hết thùng xe xuống nên ý 2 là sai. Cả ý 1 và ý 3 đều đúng.",
        "answers": [
            "Khi chạy trên đường xấu, nhiều ổ gà nên chạy chậm để thùng xe không bị lắc mạnh, không gây hiện tượng lệch \"ben\"; khi chạy vào đường vòng, cần giảm tốc độ, không lấy lái gấp và không phanh gấp.",
            "Khi chạy trên đường quốc lộ, đường bằng phẳng không cần hạ hết thùng xe xuống.",
            "Khi đổ hàng phải chọn vị trí có nền đường cứng và phẳng, dừng hẳn xe, kéo chặt phanh tay; sau đó mới điều khiển cơ cấu nâng \"ben\" để đổ hàng, đổ xong hàng mới hạ thùng xuống.",
            "Cả ý 1 và ý 3.",
        ],
        "correct":""
    },
    {
        "image": "",
        "no": 229,
        "index": 229,
        "text": "Khi điều khiển xe tăng số, người lái xe cần chú ý những điểm gì để đảm bảo an toàn?",
        "tip": "Không được nhìn xuống buồng lái khi tăng số.",
        "answers": [
            "Không được nhìn xuống buồng lái, cần phải tăng thứ tự từ thấp đến cao, phối hợp các động tác phải nhịp nhàng, chính xác.",
            "Nhìn xuống buồng lái để biết chính xác vị trí các tay số, cần phải tăng thứ tự từ thấp đến cao, phối hợp các động tác phải nhịp nhàng, vù ga phải phù hợp với tốc độ.",
        ],
        "correct":""
    },
    {
        "image": "",
        "no": 230,
        "index": 230,
        "text": "Khi điều khiển xe giảm số, người lái xe cần chú ý những điểm gì để đảm bảo an toàn?",
        "tip": "Không được nhìn xuống buồng lái khi giảm số.",
        "answers": [
            "Nhìn xuống buồng lái để biết chính xác vị trí các tay số, cần phải giảm thứ tự từ cao đến thấp, phối hợp các động tác phải nhịp nhàng, chính xác.",
            "Không được nhìn xuống buồng lái, cần phải giảm thứ tự từ cao đến thấp, phối hợp các động tác phải nhịp nhàng chính xác, vù ga phải phù hợp với tốc độ.",
        ],
        "correct":""
    },
    {
        "image": "",
        "no": 231,
        "index": 231,
        "text": "Để giảm tốc độ khi ô tô đi xuống đường dốc dài, người lái xe phải thực hiện các thao tác nào để đảm bảo an toàn?",
        "tip": "Để giảm tốc độ khi ô tô xuống dốc dài thì về số thấp phù hợp, nhả bàn đạp ga, đạp phanh chân phù hợp.",
        "answers": [
            "Nhả bàn đạp ga, đạp ly hợp (côn) hết hành trình, đạp mạnh phanh chân để giảm tốc độ.",
            "Về số thấp phù hợp, nhả bàn đạp ga, đạp phanh chân với mức độ phù hợp để giảm tốc độ.",
            "Nhả bàn đạp ga, tăng lên số cao, đạp phanh chân với mức độ phù hợp để giảm tốc độ.",
        ],
        "correct":""
    },
    {
        "image": "",
        "no": 232,
        "index": 232,
        "text": "Khi điều khiển ô tô qua đoạn đường ngập nước, người lái xe cần thực hiện các thao tác nào để đảm bảo an toàn?",
        "tip": "Điều khiển ô tô qua đường ngập nước thì về số thấp, giữ đều ga.",
        "answers": [
            "Tăng lên số cao, tăng ga và giảm ga liên tục để thay đổi tốc độ, giữ vững tay lái để ô tô vượt qua đoạn đường ngập nước.",
            "Đạp ly hợp (côn) hết hành trình, tăng ga và giảm ga liên tục để thay đổi tốc độ, giữ vững tay lái để ô tô vượt qua đoạn đường ngập nước.",
            "Quan sát, ước lượng độ ngập nước mà xe ôtô có thể vượt qua an toàn, về số thấp, giữ đều ga và giữ vững tay lái để ô tô vượt qua đoạn đường ngập nước.",
        ],
        "correct":""
    },
    {
        "image": "",
        "no": 233,
        "index": 233,
        "text": "Khi điều khiển ô tô tới gần xe chạy ngược chiều vào ban đêm, người lái xe cần thực hiện các thao tác nào để đảm bảo an toàn?",
        "tip": "Điều khiển ô tô ban đêm tới gần xe ngược chiều thì chuyển đèn sang chiếu gần, không nhìn vào đèn xe ngược chiều.",
        "answers": [
            "Chuyển từ đèn chiếu xa sang đèn chiếu gần; không nhìn thẳng vào đèn của xe chạy ngược chiều mà nhìn chếch sang phía phải theo chiều chuyển động của xe mình.",
            "Chuyển từ đèn chiếu gần sang đèn chiếu xa; không nhìn thẳng vào đèn của xe chạy ngược chiều mà nhìn chếch sang phía phải theo chiều chuyển động của xe mình.",
            "Chuyển từ đèn chiếu xa sang đèn chiếu gần; nhìn thẳng vào đèn của xe chạy ngược chiều để tránh xe đảm bảo an toàn.",
        ],
        "correct":""
    },
    {
        "image": "",
        "no": 234,
        "index": 234,
        "text": "Khi điều khiển xe ô tô trên đường trơn cần chú ý những điểm gì để đảm bảo an toàn?",
        "tip": "Điều khiển ô tô qua đường trơn thì không đánh lái ngoặt và phanh gấp.",
        "answers": [
            "Giữ vững tay lái cho xe đi đúng vệt bánh xe đi trước, sử dụng số thấp đi chậm, giữ đều ga, đánh lái ngoặt và phanh gấp khi cần thiết.",
            "Giữ vững tay lái cho xe đi đúng vệt bánh xe đi trước, sử dụng số thấp đi chậm (số L hoặc 1, 2 đối với xe số tự động), gài cầu (nếu có), giữ đều ga, không lấy nhiều lái, không đánh lái ngoặt và phanh gấp.",
        ],
        "correct":""
    },
    {
        "image": "q235.png",
        "no": 235,
        "index": 235,
        "text": "Khi động cơ ô tô đã khởi động, bảng đồng hồ xuất hiện ký hiệu như hình vẽ dưới đây, báo hiệu tình trạng như thế nào của xe ô tô?",
        "tip": "BRAKE thì phanh tay đang hãm hoặc thiếu dầu phanh.",
        "answers": [
            "Phanh tay đang hãm hoặc thiếu dầu phanh.",
            "Nhiệt độ nước làm mát quá mức cho phép.",
            "Cửa xe đang mở.",
        ],
        "correct":""
    },
    {
        "image": "q236.png",
        "no": 236,
        "index": 236,
        "text": "Khi động cơ ô tô đã khởi động, bảng đồng hồ xuất hiện ký hiệu như hình vẽ dưới đây, báo hiệu tình trạng như thế nào của xe ô tô?",
        "tip": "",
        "answers": [
            "Phanh tay đang hãm.",
            "Thiếu dầu phanh.",
            "Nhiệt độ nước làm mát tăng quá mức cho phép.",
            "Dầu bôi trơn bị thiếu.",
        ],
        "correct":""
    },
    {
        "image": "q237.png",
        "no": 237,
        "index": 237,
        "text": "Khi động cơ ô tô đã khởi động, bảng đồng hồ xuất hiện ký hiệu như hình vẽ dưới đây, báo hiệu tình trạng như thế nào của xe ô tô?",
        "tip": "",
        "answers": [
            "Cửa xe đóng chưa chặt; hoặc có cửa xe chưa đóng.",
            "Bộ nạp ắc quy gặp sự cố kỹ thuật.",
            "Dầu bôi trơn bị thiếu.",
            "Cả ý 2 và 3.",
        ],
        "correct":""
    },
    {
        "image": "q238.png",
        "no": 238,
        "index": 238,
        "text": "Khi động cơ ô tô đã khởi động, bảng đồng hồ xuất hiện ký hiệu như hình vẽ dưới đây, báo hiệu tình trạng như thế nào của xe ô tô?",
        "tip": "",
        "answers": [
            "Thiếu dầu phanh, phanh tay đang hãm.",
            "Hệ thống túi khí an toàn gặp sự cố.",
            "Lái xe và người ngồi ghế trước chưa cài dây an toàn.",
            "Cửa đóng chưa chặt, có cửa chưa đóng.",
        ],
        "correct":""
    },
    {
        "image": "q239.png",
        "no": 239,
        "index": 239,
        "text": "Khi động cơ ô tô đã khởi động, bảng đồng hồ xuất hiện ký hiệu như hình vẽ dưới đây, báo hiệu tình trạng như thế nào của xe ô tô?",
        "tip": "",
        "answers": [
            "Báo hiệu thiếu dầu phanh.",
            "Áp suất lốp không đủ.",
            "Đang hãm phanh tay.",
            "Sắp hết nhiên liệu.",
        ],
        "correct":""
    },
    {
        "image": "",
        "no": 240,
        "index": 240,
        "text": "Trong các loại nhiên liệu dưới đây, loại nhiên liệu nào giảm thiểu ô nhiễm môi trường?",
        "tip": "",
        "answers": [
            "Xăng và dầu diesel.",
            "Xăng sinh học và khí sinh học.",
            "Cả ý 1 và ý 2.",
        ],
        "correct":""
    },
    {
        "image": "",
        "no": 241,
        "index": 241,
        "text": "Các biện pháp tiết kiệm nhiên liệu khi chạy xe?",
        "tip": "Để tiết kiệm nhiên liệu thì bảo dưỡng định kỳ và kiểm tra áp suất lốp.",
        "answers": [
            "Bảo dưỡng xe theo định kỳ và có kế hoạch lộ trình trước khi chạy xe.",
            "Kiểm tra áp suất lốp theo quy định và chạy xe với tốc độ phù hợp với tình trạng mặt đường và mật độ giao thông trên đường.",
            "Cả ý 1 và ý 2.",
        ],
        "correct":""
    },
    {
        "image": "",
        "no": 242,
        "index": 242,
        "text": "Khi đã đỗ xe ô tô sát lề đường bên phải, người lái xe phải thực hiện các thao tác nào dưới đây khi mở cửa xuống xe để đảm bảo an toàn?",
        "tip": "Mở cửa xe thì quan sát rồi mới mở hé cánh cửa.",
        "answers": [
            "Quan sát tình hình giao thông phía sau, mở hé cánh cửa, nếu đảm bảo an toàn thì mở cửa ở mức cần thiết để xuống xe ô tô.",
            "Mở cánh cửa và quan sát tình hình giao thông phía trước, nếu đảm bảo an toàn thì mở cửa ở mức cần thiết để xuống xe ô tô.",
            "Mở cánh cửa hết hành trình và nhanh chóng ra khỏi xe ô tô.",
        ],
        "correct":""
    },
    {
        "image": "",
        "no": 243,
        "index": 243,
        "text": "Khi lái xe ô tô qua đường sắt không có rào chắn, không có người điều khiển giao thông, người lái xe phải xử lý như thế nào để đảm bảo an toàn?",
        "tip": "Lái xe ô tô qua đường sắt không rào chắn thì cách 5 mét hạ kính cửa, tắt âm thanh, quan sát.",
        "answers": [
            "Tạm dừng xe tại vị trí cách đường sắt tối thiểu 5 mét, hạ kính cửa, tắt các thiết bị âm thanh trên xe, quan sát, nếu không có tàu chạy qua, về số thấp, tăng ga nhẹ để tránh động cơ chết máy cho xe vượt qua.",
            "Tại vị trí cách đường sắt tối thiểu 5 mét quan sát phía trước, nếu tàu còn cách xa, tăng số cao, tăng ga để cho xe nhanh chóng vượt qua đường sắt.",
        ],
        "correct":""
    },
    {
        "image": "",
        "no": 244,
        "index": 244,
        "text": "Khi lái xe ô tô qua đường sắt không có rào chắn, không có người điều khiển giao thông, người lái xe thực hiện thao tác: tạm dừng xe tại vị trí cách đường sắt tối thiểu 5 mét, hạ kính cửa, tắt các thiết bị âm thanh trên xe, quan sát và nếu không có tàu chạy qua thì về số thấp, tăng ga nhẹ để tránh động cơ chết máy cho xe vượt qua để đảm bảo an toàn là đúng hay không?",
        "tip": "Lái xe ô tô qua đường sắt không rào chắn thì cách 5 mét hạ kính cửa, tắt âm thanh, quan sát.",
        "answers": [
            "Không đúng.",
            "Đúng.",
            "Không cần thiết, vì nếu nhìn thấy tàu còn cách xa, người lái xe có thể tăng số cao, tăng ga để cho xe nhanh chóng vượt qua đường sắt.",
        ],
        "correct":""
    },
    {
        "image": "",
        "no": 245,
        "index": 245,
        "text": "Khi điều khiển ô tô có hộp số tự động đi vào đường trơn trượt, lầy lội, người lái xe phải xử lý như thế nào để đảm bảo an toàn trong các trường hợp dưới đây?",
        "tip": "Điều khiển xe tự động vào đường trơn trượt thì về số thấp, kết hợp phanh chân.",
        "answers": [
            "Về số thấp, kết hợp phanh chân để giảm tốc độ.",
            "Giữ nguyên tay số D, kết hợp phanh tay để giảm tốc độ.",
            "Về số N (số 0), kết hợp phanh chân để giảm tốc độ.",
        ],
        "correct":""
    },
    {
        "image": "",
        "no": 246,
        "index": 246,
        "text": "Khi động cơ ô tô đã khởi động, muốn điều chỉnh ghế của người lái, người lái xe phải điều chỉnh cần số ở vị trí nào?",
        "tip": "Điều chỉnh ghế thì cần số ở P hoặc N.",
        "answers": [
            "Vị trí N hoặc vị trí P hoặc số 0.",
            "Vị trí D hoặc số 1.",
            "Vị trí R.",
        ],
        "correct":""
    },
    {
        "image": "",
        "no": 247,
        "index": 247,
        "text": "Khi điều khiển ô tô có hộp số tự động, người lái xe sử dụng chân như thế nào là đúng để bảo đảm an toàn?",
        "tip": "Điều khiển xe số tự động không sử dụng chân trái.",
        "answers": [
            "Không sử dụng chân trái; chân phải điều khiển bàn đạp phanh và bàn đạp ga.",
            "Chân trái điều khiển bàn đạp phanh, chân phải điều khiển bàn đạp ga.",
            "Không sử dụng chân phải; chân trái điều khiển bàn đạp phanh và bàn đạp ga.",
        ],
        "correct":""
    },
    {
        "image": "",
        "no": 248,
        "index": 248,
        "text": "Khi tầm nhìn bị hạn chế bởi sương mù hoặc mưa to, người lái xe phải thực hiện các thao tác nào?",
        "tip": "Tầm nhìn bị hạn chế thì giảm tốc độ.",
        "answers": [
            "Tăng tốc độ, chạy gần xe trước, nhìn đèn hậu để định hướng.",
            "Giảm tốc độ, chạy cách xa xe trước với khoảng cách an toàn, bật đèn sương mù và đèn chiếu gần.",
            "Tăng tốc độ, bật đèn pha vượt qua xe chạy trước.",
        ],
        "correct":""
    },
    {
        "image": "",
        "no": 249,
        "index": 249,
        "text": "Khi đèn pha của xe đi ngược chiều gây chói mắt, làm giảm khả năng quan sát trên đường, người lái xe xử lý như thế nào để đảm bảo an toàn?",
        "tip": "Đèn pha xe ngược chiều gây chói mắt thì giảm tốc độ.",
        "answers": [
            "Giảm tốc độ, nếu cần thiết có thể dừng xe lại.",
            "Bật đèn pha chiếu xa và giữ nguyên tốc độ.",
            "Tăng tốc độ, bật đèn pha đối diện xe phía trước.",
        ],
        "correct":""
    },
    {
        "image": "",
        "no": 250,
        "index": 250,
        "text": "Để đạt được hiệu quả phanh cao nhất, người lái xe mô tô phải sử dụng các kỹ năng như thế nào dưới đây?",
        "tip": "Khi phanh xe mô tô thì giảm hết ga.",
        "answers": [
            "Sử dụng phanh trước.",
            "Sử dụng phanh sau.",
            "Giảm hết ga; sử dụng đồng thời cả phanh sau và phanh trước.",
        ],
        "correct":""
    },
    {
        "image": "",
        "no": 251,
        "index": 251,
        "text": "Khi lái xe ô tô trên mặt đường có nhiều \"ổ gà\", người lái xe phải thực hiện thao tác như thế nào để đảm bảo an toàn?",
        "tip": "Lái xe trên đường có nhiều ổ gà thì giảm tốc độ.",
        "answers": [
            "Giảm tốc độ, về số thấp và giữ đều ga.",
            "Tăng tốc độ cho xe lướt qua nhanh.",
            "Tăng tốc độ, đánh lái liên tục để tránh \"ổ gà\".",
        ],
        "correct":""
    },
    {
        "image": "",
        "no": 252,
        "index": 252,
        "text": "Khi điều khiển ô tô gặp mưa to hoặc sương mù, người lái xe phải làm gì để đảm bảo an toàn?",
        "tip": "Điều khiển ô tô gặp mưa to thì chạy tốc độ chậm.",
        "answers": [
            "Bật đèn chiếu gần và đèn vàng, điều khiển gạt nước, điều khiển ô tô đi với tốc độ chậm để có thể quan sát được; tìm chỗ an toàn dừng xe, bật đèn dừng khẩn cấp báo hiệu cho các xe khác biết.",
            "Bật đèn chiếu xa và đèn vàng, điều khiển gạt nước, tăng tốc độ điều khiển ô tô qua khỏi khu vực mưa hoặc sương mù.",
            "Tăng tốc độ, bật đèn pha vượt qua xe chạy phía trước.",
        ],
        "correct":""
    },
    {
        "image": "",
        "no": 253,
        "index": 253,
        "text": "Điều khiển xe ô tô trong trời mưa, người lái xe phải xử lý như thế nào để đảm bảo an toàn?",
        "tip": "Điều khiển ô tô trong trời mưa thì giảm tốc độ.",
        "answers": [
            "Giảm tốc độ, tăng cường quan sát, không nên phanh gấp, không nên tăng ga hay đánh vô lăng đột ngột, bật đèn pha gần, mở chế độ gạt nước ở chế độ phù hợp để đảm bảo quan sát.",
            "Phanh gấp khi xe đi vào vũng nước và tăng ga ngay sau khi ra khỏi vũng nước.",
            "Bật đèn chiếu xa, tăng tốc độ điều khiển ô tô qua khỏi khu vực mưa.",
        ],
        "correct":""
    },
    {
        "image": "",
        "no": 254,
        "index": 254,
        "text": "Khi lùi xe, người lái xe phải xử lý như thế nào để bảo đảm an toàn giao thông?",
        "tip": "Lùi xe thì cần quan sát phía sau xe.",
        "answers": [
            "Quan sát bên trái, bên phải, phía sau xe, có tín hiệu cần thiết và lùi xe với tốc độ phù hợp.",
            "Quan sát phía trước xe và lùi xe với tốc độ nhanh.",
            "Quan sát bên trái và phía trước của xe và lùi xe với tốc độ nhanh.",
        ],
        "correct":""
    },
    {
        "image": "",
        "no": 255,
        "index": 255,
        "text": "Điều khiển xe ô tô trong khu vực đông dân cư cần lưu ý điều gì dưới đây?",
        "tip": "Điều khiển xe ô tô trong khu vực đông dân cư thì giảm tốc độ và đi đúng làn đường.",
        "answers": [
            "Giảm tốc độ đến mức an toàn, quan sát, nhường đường cho người đi bộ; giữ khoảng cách an toàn với các xe phía trước.",
            "Đi đúng làn đường quy định; chỉ được chuyển làn đường ở nơi cho phép, nhưng phải quan sát.",
            "Cả ý 1 và ý 2.",
        ],
        "correct":""
    },
    {
        "image": "",
        "no": 256,
        "index": 256,
        "text": "Khi điều khiển xe ô tô nhập vào đường cao tốc người lái xe cần thực hiện như thế nào để bảo đảm an toàn giao thông?",
        "tip": "Khi lái xe nhập vào làn đường cao tốc thì nhường đường cho xe đang trên đường cao tốc.",
        "answers": [
            "Quan sát, phát tín hiệu và lái xe nhập vào làn đường tăng tốc, nhường đường cho các xe đang chạy trên đường cao tốc, khi đủ điều kiện an toàn thì tăng tốc độ cho xe nhập vào làn đường cao tốc.",
            "Phát tín hiệu, quan sát các xe đang chạy phía trước, nếu đảm bảo các điều kiện an toàn thì tăng tốc độ cho xe nhập ngay vào làn đường cao tốc.",
            "Phát tín hiệu và lái xe nhập vào làn đường tăng tốc, quan sát các xe phía sau đang chạy trên đường cao tốc, khi đủ điều kiện an toàn thì giảm tốc độ, từ từ cho xe nhập vào làn đường cao tốc.",
        ],
        "correct":""
    },
    {
        "image": "",
        "no": 257,
        "index": 257,
        "text": "Khi điều khiển xe ô tô ra khỏi đường cao tốc người lái xe cần thực hiện như thế nào để bảo đảm an toàn giao thông?",
        "tip": "Điều khiển xe ra khỏi làn cao tốc thì không được phép lùi xe, nên đáp án 2 là sai.",
        "answers": [
            "Quan sát phía trước để tìm biển báo chỉ dẫn \"Lối ra đường cao tốc\", kiểm tra tình trạng giao thông phía sau và bên phải, nếu đảm bảo điều kiện an toàn thì phát tín hiệu và điều khiển xe chuyển dần sang làn đường giảm tốc và ra khỏi đường cao tốc.",
            "Quan sát về phía trước để tìm biển báo chỉ dẫn \"Lối ra đường cao tốc\", trường hợp vượt qua \"Lối ra đường cao tốc\" thì phát tín hiệu, di chuyển sang làn đường giảm tốc và lùi xe quay trở lại.",
        ],
        "correct":""
    },
    {
        "image": "",
        "no": 258,
        "index": 258,
        "text": "Người lái xe được dừng xe, đỗ xe trên làn dừng khẩn cấp của đường cao tốc trong trường hợp nào dưới đây?",
        "tip": "Trên cao tốc chỉ được dừng xe ở làn khẩn cấp khi xe gặp sự cố.",
        "answers": [
            "Xe gặp sự cố, tai nạn, hoặc trường hợp khẩn cấp không thể di chuyển bình thường.",
            "Để nghỉ ngơi, đi vệ sinh, chụp ảnh, làm việc riêng...",
            "Cả ý 1 và ý 2.",
        ],
        "correct":""
    },
    {
        "image": "",
        "no": 259,
        "index": 259,
        "text": "Trong trường hợp bất khả kháng, khi dừng xe, đỗ xe trên làn dừng khẩn cấp của đường cao tốc người lái xe phải xử lý như thế nào là đúng quy tắc giao thông?",
        "tip": "",
        "answers": [
            "Bật đèn cảnh báo sự cố, di chuyển phương tiện đến vị trí sát lề đường",
            "Sử dụng các thiết bị cảnh báo như chóp nón, biển báo, đèn chớp... đặt phía sau xe để cảnh báo các phương tiện.",
            "Gọi số điện thoại khẩn cấp của đường cao tốc để được hỗ trợ nếu xe gặp sự cố, tai nạn, hoặc các trường hợp khẩn cấp không thể di chuyển bình thường.",
            "Tất cả các ý nêu trên.",
        ],
        "correct":""
    },
    {
        "image": "",
        "no": 260,
        "index": 260,
        "text": "Khi điều khiển ô tô xuống đường dốc dài, độ dốc cao, người lái xe số tự động cần thực hiện các thao tác nào dưới đây để đảm bảo an toàn?",
        "tip": "Điều khiển ô tô số tự động xuống dốc dài thì nhả bàn đạp ga, về số thấp.",
        "answers": [
            "Nhả bàn đạp ga, về số thấp (sử dụng số L hoặc 1, 2), đạp phanh chân với mức độ phù hợp để giảm tốc độ.",
            "Nhả bàn đạp ga, về số không (N) đạp phanh chân và kéo phanh tay để giảm tốc độ.",
        ],
        "correct":""
    },
    {
        "image": "",
        "no": 261,
        "index": 261,
        "text": "Khi đi từ đường nhánh ra đường chính, người lái xe phải xử lý như nào là đúng quy tắc giao thông?",
        "tip": "Đi từ đường nhánh ra đường chính thì giảm tốc độ, nhường đường cho xe trên đường chính.",
        "answers": [
            "Giảm tốc độ, nhường đường cho xe trên đường chính từ bất kì hướng nào tới.",
            "Nháy đèn, bấm còi để xe đi trên đường chính biết và tăng tốc độ cho xe đi ra đường chính.",
            "Quan sát xe đang đi trên đường chính, nếu là xe có kích thước lớn hơn thì nhường đường, xe có kích thước nhỏ hơn thì tăng tốc độ cho xe đi ra đường chính.",
        ],
        "correct":""
    },
    {
        "image": "",
        "no": 262,
        "index": 262,
        "text": "Khi đang lái xe mô tô và ô tô, nếu có nhu cầu sử dụng điện thoại để nhắn tin hoặc gọi điện, người lái xe phải thực hiện như thế nào trong các tình huống nêu dưới đây?",
        "tip": "Khi cần nghe điện thoại thì giảm tốc độ và dừng xe ở nơi cho phép dừng xe.",
        "answers": [
            "Giảm tốc độ để đảm bảo an toàn với xe phía trước và sử dụng điện thoại để liên lạc.",
            "Giảm tốc độ để dừng xe ở nơi cho phép dừng xe sau đó sử dụng điện thoại để liên lạc.",
            "Tăng tốc độ để cách xa xe phía sau và sử dụng điện thoại để liên lạc.",
        ],
        "correct":""
    },
    {
        "image": "",
        "no": 263,
        "index": 263,
        "text": "Những thói quen nào dưới đây khi điều khiển xe mô tô tay ga tham gia giao thông dễ gây tai nạn nguy hiểm?",
        "tip": "Xe mô tô tay ga chỉ sử dụng phanh trước thì rất nguy hiểm.",
        "answers": [
            "Sử dụng còi.",
            "Phanh đồng thời cả phanh trước và phanh sau.",
            "Chỉ sử dụng phanh trước.",
        ],
        "correct":""
    },
    {
        "image": "",
        "no": 264,
        "index": 264,
        "text": "Người ngồi trên xe ô tô cần thực hiện những thao tác mở cửa như thế nào để xuống xe một cách an toàn?",
        "tip": "Mở cửa xe thì quan sát rồi mới mở hé cánh cửa.",
        "answers": [
            "Quan sát gương chiếu hậu hoặc xoay người quan sát phía sau để phát hiện các phương tiện đang di chuyển tới gần, khi đủ điều kiện an toàn, dùng tay cách xa cửa hơn mở hé cửa, sau đó mở ở mức cần thiết để xuống xe.",
            "Quan sát tình hình giao thông phía trước, không cần quan sát phía sau và bên mở cửa; mở cánh cửa hết hành trình và nhanh chóng ra khỏi xe ô tô.",
        ],
        "correct":""
    },
    {
        "image": "",
        "no": 265,
        "index": 265,
        "text": "Khi điều khiển xe mô tô quay đầu người lái xe cần thực hiện như thế nào để đảm bảo an toàn?",
        "tip": "",
        "answers": [
            "Bật tín hiệu báo rẽ trước khi quay đầu, từ từ giảm tốc độ đến mức có thể dừng lại.",
            "Chỉ quay đầu xe tại những nơi được phép quay đầu.",
            "Quan sát an toàn các phương tiện tới từ phía trước, phía sau, hai bên đồng thời nhường đường cho xe từ bên phải và phía trước đi tới.",
            "Tất cả các ý nêu trên.",
        ],
        "correct":""
    },
    {
        "image": "",
        "no": 266,
        "index": 266,
        "text": "Tay ga trên xe mô tô hai bánh có tác dụng gì trong các trường hợp dưới đây?",
        "tip": "",
        "answers": [
            "Để điều khiển xe chạy về phía trước.",
            "Để điều tiết công suất động cơ qua đó điều khiển tốc độ của xe.",
            "Để điều khiển xe chạy lùi.",
            "Cả ý 1 và ý 2.",
        ],
        "correct":""
    },
    {
        "image": "",
        "no": 267,
        "index": 267,
        "text": "Gương chiếu hậu của xe mô tô hai bánh, có tác dụng gì trong các trường hợp dưới đây?",
        "tip": "",
        "answers": [
            "Để quan sát an toàn phía bên trái khi chuẩn bị rẽ trái.",
            "Để quan sát an toàn phía bên phải khi chuẩn bị rẽ phải.",
            "Để quan sát an toàn phía sau cả bên trái và bên phải trước khi chuyển hướng.",
            "Để quan sát an toàn phía trước cả bên trái và bên phải trước khi chuyển hướng.",
        ],
        "correct":""
    },
    {
        "image": "",
        "no": 268,
        "index": 268,
        "text": "Để đảm bảo an toàn khi tham gia giao thông, người lái xe lái xe mô tô hai bánh cần điều khiển tay ga như thế nào trong các trường hợp dưới đây?",
        "tip": "",
        "answers": [
            "Tăng ga thật nhanh, giảm ga từ từ.",
            "Tăng ga thật nhanh, giảm ga thật nhanh.",
            "Tăng ga từ từ, giảm ga thật nhanh.",
            "Tăng ga từ từ, giảm ga từ từ.",
        ],
        "correct":""
    },
    {
        "image": "",
        "no": 269,
        "index": 269,
        "text": "Kỹ thuật cơ bản để giữ thăng bằng khi điều khiển xe mô tô đi trên đường gồ ghề như thế nào trong các trường hợp dưới đây?",
        "tip": "",
        "answers": [
            "Đứng thẳng trên giá gác chân lái sau đó hơi gập đầu gối và khuỷu tay, đi chậm để không nẩy quá mạnh.",
            "Ngồi lùi lại phía sau, tăng ga vượt nhanh qua đoạn đường xóc.",
            "Ngồi lệch sang bên trái hoặc bên phải để lấy thăng bằng qua đoạn đường gồ ghề.",
        ],
        "correct":""
    },
    {
        "image": "",
        "no": 270,
        "index": 270,
        "text": "Chủ phương tiện cơ giới đường bộ có được tự ý thay đổi màu sơn, nhãn hiệu hoặc các đặc tính kỹ thuật của phương tiện so với chứng nhận đăng ký xe hay không?",
        "tip": "Không được phép thay đổi so với giấy chứng nhận đăng ký xe.",
        "answers": [
            "Được phép thay đổi bằng cách dán đề can với màu sắc phù hợp.",
            "Không được phép thay đổi.",
            "Tùy từng loại phương tiện cơ giới đường bộ.",
        ],
        "correct":""
    },
    {
        "image": "",
        "no": 271,
        "index": 271,
        "text": "Xe ô tô tham gia giao thông đường bộ phải bảo đảm các quy định về chất lượng, an toàn kỹ thuật và bảo vệ môi trường nào ghi dưới đây?",
        "tip": "",
        "answers": [
            "Kính chắn gió, kính cửa phải là loại kính an toàn, bảo đảm tầm nhìn cho người điều khiển; có đủ hệ thống hãm và hệ thống chuyển hướng có hiệu lực, tay lái của xe ô tô ở bên trái của xe, có còi với âm lượng đúng quy chuẩn kỹ thuật.",
            "Có đủ đèn chiếu sáng gần và xa, đèn soi biển số, đèn báo hãm, đèn tín hiệu; có đủ bộ phận giảm thanh, giảm khói, các kết cấu phải đủ độ bền và bảo đảm tính năng vận hành ổn định.",
            "Cả ý 1 và ý 2",
        ],
        "correct":""
    },
    {
        "image": "",
        "no": 272,
        "index": 272,
        "text": "Xe mô tô và xe ô tô tham gia giao thông trên đường bộ phải bắt buộc có đủ bộ phận giảm thanh không?",
        "tip": "",
        "answers": [
            "Không bắt buộc.",
            "Bắt buộc.",
            "Tùy từng trường hợp.",
        ],
        "correct":""
    },
    {
        "image": "",
        "no": 273,
        "index": 273,
        "text": "Xe ô tô tham gia giao thông trên đường bộ phải có đủ các loại đèn gì?",
        "tip": "",
        "answers": [
            "Đèn chiếu sáng gần và xa.",
            "Đèn soi biển số; đèn báo hãm và đèn tín hiệu.",
            "Dàn đèn pha trên nóc xe.",
            "Cả ý 1 và ý 2.",
        ],
        "correct":""
    },
    {
        "image": "",
        "no": 274,
        "index": 274,
        "text": "Kính chắn gió của xe ô tô phải đảm bảo yêu cầu nào dưới đây?",
        "tip": "Yêu cầu của kính chắn gió, chọn \"Loại kính an toàn\".",
        "answers": [
            "Là loại kính an toàn, kính nhiều lớp, đúng quy cách, không rạn nứt, đảm bảo hình ảnh quan sát rõ ràng, không bị méo mó.",
            "Là loại kính trong suốt, đúng quy cách, không rạn nứt, đảm bảo tầm nhìn cho người điều khiển về phía trước mặt và hai bên.",
        ],
        "correct":""
    },
    {
        "image": "",
        "no": 275,
        "index": 275,
        "text": "Bánh xe lắp cho xe ô tô phải đảm bảo an toàn kỹ thuật như thế nào dưới đây?",
        "tip": "",
        "answers": [
            "Đủ số lượng, đủ áp suất, đúng cỡ lốp của nhà sản xuất hoặc tài liệu kỹ thuật quy định; lốp bánh dẫn hướng hai bên cùng kiểu hoa lốp, chiều cao hoa lốp đồng đều; không sử dụng lốp đắp; lốp không mòn đến dấu chỉ báo độ mòn của nhà sản xuất, không nứt, vỡ, phồng rộp làm hở lớp sợi mành.",
            "Vành, đĩa vành đúng kiểu loại, không rạn, nứt, cong vênh; bánh xe quay trơn, không bị bó kẹt hoặc cọ sát vào phần khác; moay ơ không bị rơ; lắp đặt chắc chắn, đủ các chi tiết kẹp chặt và phòng lỏng.",
            "Cả ý 1 và ý 2.",
        ],
        "correct":""
    },
    {
        "image": "",
        "no": 276,
        "index": 276,
        "text": "Âm lượng của còi điện lắp trên ô tô (đo ở độ cao 1,2 mét với khoảng cách 2 mét tính từ đầu xe) là bao nhiêu?",
        "tip": "Âm lượng của còi là từ 90 dB đến 115 dB.",
        "answers": [
            "Không nhỏ hơn 90 dB (A), không lớn hơn 115 dB (A).",
            "Không nhỏ hơn 80 dB (A), không lớn hơn 105 dB (A).",
            "Không nhỏ hơn 70 dB (A), không lớn hơn 90 dB (A).",
        ],
        "correct":""
    },
    {
        "image": "",
        "no": 277,
        "index": 277,
        "text": "Mục đích của bảo dưỡng thường xuyên đối với xe ô tô có tác dụng gì?",
        "tip": "",
        "answers": [
            "Bảo dưỡng ô tô thường xuyên làm cho ô tô luôn luôn có tính năng kỹ thuật tốt, giảm cường độ hao mòn của các chi tiết, kéo dài tuổi thọ của xe.",
            "Ngăn ngừa và phát hiện kịp thời các hư hỏng và sai lệch kỹ thuật để khắc phục, giữ gìn được hình thức bên ngoài.",
            "Cả ý 1 và ý 2.",
        ],
        "correct":""
    },
    {
        "image": "",
        "no": 278,
        "index": 278,
        "text": "Trong các nguyên nhân nêu dưới đây, nguyên nhân nào làm động cơ diesel không nổ?",
        "tip": "Động cơ diesel không nổ do nhiên liệu lẫn tạp chất.",
        "answers": [
            "Hết nhiên liệu, lõi lọc nhiên liệu bị tắc, lọc khí bị tắc, nhiên liệu lẫn không khí, tạp chất.",
            "Hết nhiên liệu, lõi lọc nhiên liệu bị tắc, lọc khí bị tắc, nhiên liệu lẫn không khí, không có tia lửa điện.",
            "Hết nhiên liệu, lõi lọc nhiên liệu bị tắc, lọc khí bị tắc, nhiên liệu lẫn không khí và nước, không có tia lửa điện.",
        ],
        "correct":""
    },
    {
        "image": "",
        "no": 279,
        "index": 279,
        "text": "Gạt nước lắp trên ô tô phải đảm bảo yêu cầu an toàn kỹ thuật nào dưới đây?",
        "tip": "",
        "answers": [
            "Đầy đủ số lượng, lắp đặt chắc chắn, hoạt động bình thường.",
            "Lưỡi gạt không quá mòn, diện tích quét đảm bảo tầm nhìn của người lái.",
            "Cả ý 1 và ý 2.",
        ],
        "correct":""
    },
    {
        "image": "",
        "no": 280,
        "index": 280,
        "text": "Dây đai an toàn lắp trên ô tô phải đảm bảo yêu cầu an toàn kỹ thuật nào dưới đây?",
        "tip": "Dây đai an toàn có cơ cấu hãm giữ chặt dây khi giật dây đột ngột.",
        "answers": [
            "Đủ số lượng, lắp đặt chắc chắn không bị rách, đứt, khóa cài đóng, mở nhẹ nhàng, không tự mở, không bị kẹt; kéo ra thu vào dễ dàng, cơ cấu hãm giữ chặt dây khi giật dây đột ngột.",
            "Đủ số lượng, lắp đặt chắc chắn không bị rách, đứt, khóa cài đóng, mở nhẹ nhàng, không tự mở, không bị kẹt; kéo ra thu vào dễ dàng, cơ cấu hãm mở ra khi giật dây đột ngột.",
            "Cả ý 1 và ý 2.",
        ],
        "correct":""
    },
    {
        "image": "",
        "no": 281,
        "index": 281,
        "text": "Thế nào là động cơ 4 kỳ?",
        "tip": "Động cơ 4 kỳ thì pít tông thực hiện 4 hành trình.",
        "answers": [
            "Là loại động cơ: để hoàn thành một chu trình công tác của động cơ, pít tông thực hiện 2 (hai) hành trình, trong đó có một lần sinh công.",
            "Là loại động cơ: để hoàn thành một chu trình công tác của động cơ, pít tông thực hiện 4 (bốn) hành trình, trong đó có một lần sinh công.",
        ],
        "correct":""
    },
    {
        "image": "",
        "no": 282,
        "index": 282,
        "text": "Công dụng của hệ thống bôi trơn đối với động cơ ô tô?",
        "tip": "Hệ thống bôi trơn giảm ma sát.",
        "answers": [
            "Cung cấp một lượng dầu bôi trơn đủ và sạch dưới áp suất nhất định đi bôi trơn cho các chi tiết của động cơ để giảm ma sát, giảm mài mòn, làm kín, làm sạch, làm mát và chống gỉ.",
            "Cung cấp một lượng nhiên liệu đầy đủ và sạch để cho động cơ ô tô hoạt động.",
            "Cả ý 1 và ý 2.",
        ],
        "correct":""
    },
    {
        "image": "",
        "no": 283,
        "index": 283,
        "text": "Niên hạn sử dụng của ô tô tải (tính bắt đầu từ năm sản xuất) là bao nhiêu năm?",
        "tip": "Niên hạn ô tô tải là 25 năm.",
        "answers": [
            "15 năm.",
            "20 năm.",
            "25 năm.",
        ],
        "correct":""
    },
    {
        "image": "",
        "no": 284,
        "index": 284,
        "text": "Niên hạn sử dụng của ô tô chở người trên 9 chỗ ngồi (tính bắt đầu từ năm sản xuất) là bao nhiêu năm?",
        "tip": "Niên hạn ô tô trên 9 chỗ ngồi là 20 năm.",
        "answers": [
            "5 năm.",
            "20 năm.",
            "25 năm.",
        ],
        "correct":""
    },
    {
        "image": "",
        "no": 285,
        "index": 285,
        "text": "Hãy nêu công dụng của động cơ ô tô?",
        "tip": "Động cơ ô tô biến nhiệt năng thành cơ năng.",
        "answers": [
            "Khi làm việc, nhiệt năng được biến đổi thành cơ năng làm trục khuỷu động cơ quay, truyền lực đến các bánh xe chủ động tạo ra chuyển động tịnh tiến cho ô tô.",
            "Khi làm việc, cơ năng được biến đổi thành nhiệt năng và truyền đến các bánh xe chủ động tạo ra chuyển động tịnh tiến cho ô tô.",
            "Cả ý 1 và ý 2.",
        ],
        "correct":""
    },
    {
        "image": "",
        "no": 286,
        "index": 286,
        "text": "Hãy nêu công dụng hệ thống truyền lực của ô tô?",
        "tip": "Hệ thống truyền lực truyền mô men quay từ động cơ tới bánh xe.",
        "answers": [
            "Dùng để truyền mô men quay từ động cơ tới các bánh xe chủ động của ô tô.",
            "Dùng để thay đổi hướng chuyển động hoặc giữ cho ô tô chuyển động ổn định theo hướng xác định.",
            "Dùng để làm giảm tốc độ, dừng chuyển động của ô tô.",
        ],
        "correct":""
    },
    {
        "image": "",
        "no": 287,
        "index": 287,
        "text": "Hãy nêu công dụng ly hợp (côn) của ô tô?",
        "tip": "Ly hợp (côn) truyền hoặc ngắt truyền động từ động cơ đến hộp số.",
        "answers": [
            "Dùng để truyền mô men xoắn giữa các trục không cùng nằm trên một đường thẳng và góc lệch trục luôn thay đổi trong quá trình ô tô chuyển động.",
            "Dùng để truyền hoặc ngắt truyền động từ động cơ đến hộp số của ô tô.",
            "Dùng để truyền truyền động từ hộp số đến bánh xe chủ động của ô tô.",
        ],
        "correct":""
    },
    {
        "image": "",
        "no": 288,
        "index": 288,
        "text": "Hãy nêu công dụng hộp số của ô tô?",
        "tip": "Hộp số ô tô đảm bảo chuyển động lùi.",
        "answers": [
            "Truyền và tăng mô men xoắn giữa các trục vuông góc nhau, đảm bảo cho các bánh xe chủ động quay với tốc độ khác nhau khi sức cản chuyển động ở bánh xe hai bên không bằng nhau.",
            "Truyền và thay đổi mô men xoắn giữa các trục không cùng nằm trên một đường thẳng và góc lệch trục luôn thay đổi trong quá trình ô tô chuyển động, chuyển số êm dịu, dễ điều khiển.",
            "Truyền và thay đổi mô men từ động cơ đến bánh xe chủ động, cắt truyền động từ động cơ đến bánh xe chủ động, đảm bảo cho ô tô chuyển động lùi.",
        ],
        "correct":""
    },
    {
        "image": "",
        "no": 289,
        "index": 289,
        "text": "Hãy nêu công dụng hệ thống lái của ô tô?",
        "tip": "Hệ thống lái dùng để thay đổi hướng.",
        "answers": [
            "Dùng để thay đổi mô men từ động cơ tới các bánh xe chủ động khi ô tô chuyển động theo hướng xác định.",
            "Dùng để thay đổi mô men giữa các trục vuông góc nhau khi ô tô chuyển động theo hướng xác định.",
            "Dùng để thay đổi hướng chuyển động hoặc giữ cho ô tô chuyển động ổn định theo hướng xác định.",
        ],
        "correct":""
    },
    {
        "image": "",
        "no": 290,
        "index": 290,
        "text": "Hãy nêu công dụng hệ thống phanh của ô tô?",
        "tip": "Hệ thống phanh giúp giảm tốc độ.",
        "answers": [
            "Dùng để giảm tốc độ, dừng chuyển động của ô tô và giữ cho ô tô đứng yên trên dốc.",
            "Dùng để thay đổi hướng chuyển động hoặc giữ cho ô tô chuyển động ổn định theo hướng xác định.",
            "Dùng để truyền hoặc ngắt truyền động từ động cơ đến bánh xe chủ động của ô tô.",
        ],
        "correct":""
    },
    {
        "image": "",
        "no": 291,
        "index": 291,
        "text": "Đèn phanh trên xe mô tô có tác dụng gì?",
        "tip": "",
        "answers": [
            "Có tác dụng cảnh báo cho các xe phía sau biết xe đang giảm tốc để chủ động tránh hoặc giảm tốc để tránh va chạm.",
            "Có tác dụng định vị vào ban đêm với các xe từ phía sau tới để tránh va chạm.",
            "Cả ý 1 và ý 2",
        ],
        "correct":""
    },
    {
        "image": "q292.png",
        "no": 292,
        "index": 292,
        "text": "Khi động cơ ô tô đã khởi động, bảng đồng hồ xuất hiện ký hiệu như hình vẽ dưới đây, báo hiệu tình trạng như thế nào của xe ô tô?",
        "tip": "",
        "answers": [
            "Nhiệt độ nước làm mát động cơ quá ngưỡng cho phép.",
            "Áp suất lốp không đủ.",
            "Đang hãm phanh tay.",
            "Cần kiểm tra động cơ.",
        ],
        "correct":""
    },
    {
        "image": "q293.png",
        "no": 293,
        "index": 293,
        "text": "Khi động cơ ô tô đã khởi động, bảng đồng hồ xuất hiện ký hiệu như hình vẽ dưới đây, báo hiệu tình trạng như thế nào của xe ô tô?",
        "tip": "",
        "answers": [
            "Báo hiệu hệ thống chống bó cứng khi phanh bị lỗi.",
            "Áp suất lốp không đủ.",
            "Đang hãm phanh tay.",
            "Cần kiểm tra động cơ.",
        ],
        "correct":""
    },
    {
        "image": "q294.png",
        "no": 294,
        "index": 294,
        "text": "Khi động cơ ô tô đã khởi động, bảng đồng hồ xuất hiện ký hiệu như hình vẽ dưới đây, báo hiệu tình trạng như thế nào của xe ô tô?",
        "tip": "",
        "answers": [
            "Báo hiệu thiếu dầu phanh.",
            "Áp suất lốp không đủ.",
            "Đang hãm phanh tay.",
            "Sắp hết nhiên liệu.",
        ],
        "correct":""
    },
    {
        "image": "q295.png",
        "no": 295,
        "index": 295,
        "text": "Khi động cơ ô tô đã khởi động, bảng đồng hồ xuất hiện ký hiệu như hình vẽ dưới đây, báo hiệu tình trạng như thế nào của xe ô tô?",
        "tip": "",
        "answers": [
            "Báo hiệu hệ thống chống bó cứng khi phanh bị lỗi.",
            "Áp suất lốp không đủ.",
            "Đang hãm phanh tay.",
            "Sắp hết nhiên liệu.",
        ],
        "correct":""
    },
    {
        "image": "q296.png",
        "no": 296,
        "index": 296,
        "text": "Khi khởi động xe số tự động có trang bị chìa khóa thông minh có cần đạp hết hành trình bàn đạp chân phanh?",
        "tip": "Khởi động xe tự động phải đạp phanh.",
        "answers": [
            "Phải đạp hết hành trình bàn đạp chân phanh.",
            "Không cần đạp phanh.",
            "Tùy từng trường hợp.",
        ],
        "correct":""
    },
    {
        "image": "",
        "no": 297,
        "index": 297,
        "text": "Ắc quy được trang bị trên xe ô tô có tác dụng gì?",
        "tip": "Ắc quy để tích trữ điện năng.",
        "answers": [
            "Giúp người lái xe kịp thời tạo xung lực tối đa lên hệ thống phanh trong khoảnh khắc đầu tiên của tình huống khẩn cấp.",
            "Ổn định chuyển động của xe ô tô khi đi vào đường vòng.",
            "Hỗ trợ người lái xe khởi hành ngang dốc.",
            "Để tích trữ điện năng, cung cấp cho các phụ tải khi máy phát chưa làm việc.",
        ],
        "correct":""
    },
    {
        "image": "",
        "no": 298,
        "index": 298,
        "text": "Máy phát điện được trang bị trên xe ô tô có tác dụng gì?",
        "tip": "Máy phát điện để phát điện năng.",
        "answers": [
            "Để phát điện năng cung cấp cho các phụ tải làm việc và nạp điện cho ắc quy.",
            "Ổn định chuyển động của xe ô tô khi đi vào đường vòng.",
            "Hỗ trợ người lái xe khởi hành ngang dốc.",
            "Để tích trữ điện năng và cung cấp điện cho các phụ tải làm việc.",
        ],
        "correct":""
    },
    {
        "image": "",
        "no": 299,
        "index": 299,
        "text": "Dây đai an toàn được trang bị trên xe ô tô có tác dụng gì?",
        "tip": "Dây đai giữ chặt người lái và hành khách trên ghế ngồi.",
        "answers": [
            "Ổn định chuyển động của xe ô tô khi đi vào đường vòng.",
            "Giữ chặt người lái và hành khách trên ghế ngồi khi xe ô tô đột ngột dừng lại.",
            "Để tích trữ điện năng và cung cấp điện cho các phụ tải làm việc.",
        ],
        "correct":""
    },
    {
        "image": "",
        "no": 300,
        "index": 300,
        "text": "Túi khí được trang bị trên xe ô tô có tác dụng gì?",
        "tip": "Túi khí giúp giảm khả năng va đập và hấp thụ một phần lực va đập.",
        "answers": [
            "Giữ chặt người lái và hành khách trên ghế ngồi khi xe ô tô đột ngột dừng lại.",
            "Giảm khả năng va đập của một số bộ phận cơ thể quan trọng với các vật thể trong xe.",
            "Hấp thụ một phần lực va đập lên người lái và hành khách.",
            "Cả ý 2 và ý 3.",
        ],
        "correct":""
    },
    {
        "image": "q301.png",
        "no": 301,
        "index": 301,
        "text": "Khi động cơ ô tô đã khởi động, bảng đồng hồ xuất hiện ký hiệu như hình vẽ dưới đây không tắt trong thời gian dài, báo hiệu tình trạng như thế nào của xe ô tô?",
        "tip": "",
        "answers": [
            "Nhiệt độ nước làm mát động cơ quá ngưỡng cho phép.",
            "Áp suất lốp không đủ.",
            "Đang hãm phanh tay.",
            "Hệ thống lái gặp trục trặc.",
        ],
        "correct":""
    },
    {
        "image": "q302.png",
        "no": 302,
        "index": 302,
        "text": "Trên xe ô tô có trang bị thiết bị như hình vẽ có tác dụng gì?",
        "tip": "",
        "answers": [
            "Dùng để kích (hay nâng) xe ô tô",
            "Vặn ốc lắp bánh xe.",
            "Ổn định chuyển động của xe ô tô khi đi vào đường vòng.",
            "Giữ chặt người lái và hành khách trên ghế ngồi khi xe ô tô đột ngột dừng lại.",
        ],
        "correct":""
    },
    {
        "image": "q303.png",
        "no": 303,
        "index": 303,
        "text": "Trên xe ô tô có trang bị thiết bị như hình vẽ, dùng để làm gì?",
        "tip": "",
        "answers": [
            "Thay lốp xe.",
            "Chữa cháy.",
            "Phá cửa kính xe ô tô trong các trường hợp khẩn cấp.",
            "Vặn ốc để tháo lắp bánh xe.",
        ],
        "correct":""
    },
    {
        "image": "q304.png",
        "no": 304,
        "index": 304,
        "text": "Trên xe ô tô có trang bị thiết bị như hình vẽ, dùng để làm gì?",
        "tip": "",
        "answers": [
            "Thay lốp xe.",
            "Chữa cháy trong các trường hợp hỏa hoạn.",
            "Phá cửa kính xe ô tô trong các trường hợp khẩn cấp.",
            "Cầm máu cho người bị nạn.",
        ],
        "correct":""
    },
    {
        "image": "q305.png",
        "no": 305,
        "index": 305,
        "text": "Biển nào cấm các loại xe cơ giới đi vào, trừ xe gắn máy, mô tô hai bánh và các loại xe ưu tiên theo luật định?",
        "tip": "",
        "answers": [
            "Biển 1.",
            "Biển 2.",
            "Biển 1 và 3.",
            "Cả ba biển.",
        ],
        "correct":""
    },
    {
        "image": "q306.png",
        "no": 306,
        "index": 306,
        "text": "Biển nào cấm ô tô tải?",
        "tip": "",
        "answers": [
            "Cả ba biển.",
            "Biển 2 và 3.",
            "Biển 1 và 3.",
            "Biển 1 và 2.",
        ],
        "correct":""
    },
    {
        "image": "q307.png",
        "no": 307,
        "index": 307,
        "text": "Biển nào cấm máy kéo?",
        "tip": "Biển 2: P.106 \"Cấm xe ôtô tải\" sẽ cấm cả máy kéo và các xe máy chuyên dùng; Biển 3: P.109 \"Cấm máy kéo\" nên Biển 2 và Biển 3 là đáp án đúng.",
        "answers": [
            "Biển 1.",
            "Biển 2 và 3.",
            "Biển 1 và 3.",
            "Cả ba biển.",
        ],
        "correct":""
    },
    {
        "image": "q308.png",
        "no": 308,
        "index": 308,
        "text": "Biển nào báo hiệu cấm xe mô tô ba bánh đi vào?",
        "tip": "Biển 1: P.104 \"Cấm mô tô\" thì cấm cả mô tô 3 bánh.\nBiển 2: P.103a \"Cấm ô tô\" cấm ô tô và và cả phương tiện 3 bánh đi vào.",
        "answers": [
            "Biển 1 và 2.",
            "Biển 1 và 3.",
            "Biển 2 và 3.",
        ],
        "correct":""
    },
    {
        "image": "q309.png",
        "no": 309,
        "index": 309,
        "text": "Biển nào dưới đây xe gắn máy được phép đi vào?",
        "tip": "Biển 104 \"Cấm mô tô\" và biển 103a \"Cấm ô tô\" không cấm xe gắn máy (không phải mô tô). Nên cả 2 biển đều cho phép xe gắn máy đi vào.",
        "answers": [
            "Biển 1.",
            "Biển 2",
            "Cả hai biển.",
        ],
        "correct":""
    },
    {
        "image": "q310.png",
        "no": 310,
        "index": 310,
        "text": "Biển nào báo hiệu cấm xe mô tô hai bánh đi vào?",
        "tip": "",
        "answers": [
            "Biển 1.",
            "Biển 2.",
            "Biển 3.",
        ],
        "correct":""
    },
    {
        "image": "q311.png",
        "no": 311,
        "index": 311,
        "text": "Khi gặp biển nào thì xe mô tô hai bánh được đi vào?",
        "tip": "",
        "answers": [
            "Không biển nào.",
            "Biển 1 và 2.",
            "Biển 2 và 3.",
            "Cả ba biển.",
        ],
        "correct":""
    },
    {
        "image": "q312.png",
        "no": 312,
        "index": 312,
        "text": "Biển nào cho phép ô tô con được vượt?",
        "tip": "Biển 1: DP.133 \"Hết cấm vượt\"; Biển 2: P.125 \"Cấm vượt\"; Biển 3: P.126 \"Cấm ô tô tải vượt\". Chỉ có biển 2 cấm ô tô con vượt nên là đáp án đúng Biển 1 và biển 3.",
        "answers": [
            "Biển 1 và 2.",
            "Biển 2.",
            "Biển 1 và 3.",
            "Biển 2 và 3.",
        ],
        "correct":""
    },
    {
        "image": "q313.png",
        "no": 313,
        "index": 313,
        "text": "Biển nào không cho phép ô tô con vượt?",
        "tip": "Biển 1: DP.133 \"Hết cấm vượt\"; Biển 2: P.125 \"Cấm vượt\"; Biển 3: P.126 \"Cấm ô tô tải vượt\". Biển 2 cấm ô tô con vượt nên là đáp án đúng.",
        "answers": [
            "Biển 1.",
            "Biển 2.",
            "Biển 3.",
        ],
        "correct":""
    },
    {
        "image": "q314.png",
        "no": 314,
        "index": 314,
        "text": "Biển nào cấm ô tô tải vượt?",
        "tip": "Biển 1: DP.133 \"Hết cấm vượt\"; Biển 2: P.125 \"Cấm vượt\"; Biển 3: P.126 \"Cấm ô tô tải vượt\".",
        "answers": [
            "Biển 1.",
            "Biển 1 và 2.",
            "Biển 1 và 3.",
            "Biển 2 và 3.",
        ],
        "correct":""
    },
    {
        "image": "q315.png",
        "no": 315,
        "index": 315,
        "text": "Biển nào cấm xe tải vượt?",
        "tip": "",
        "answers": [
            "Biển 1.",
            "Biển 2.",
            "Cả hai biển.",
        ],
        "correct":""
    },
    {
        "image": "q316.png",
        "no": 316,
        "index": 316,
        "text": "Biển nào xe ô tô con được phép vượt?",
        "tip": "",
        "answers": [
            "Biển 1.",
            "Biển 2.",
        ],
        "correct":""
    },
    {
        "image": "q317.png",
        "no": 317,
        "index": 317,
        "text": "Biển nào cấm quay xe?",
        "tip": "Biển 1: P.123a \"Cấm rẽ trái\" không cấm quay đầu xe; Biển 2: P.124a \"Cấm quay xe\" không cấm rẽ trái.\nNên Biển 2 là đáp án đúng.",
        "answers": [
            "Biển 1.",
            "Biển 2.",
            "Không biển nào.",
            "Cả hai biển.",
        ],
        "correct":""
    },
    {
        "image": "q318.png",
        "no": 318,
        "index": 318,
        "text": "Biển nào cấm xe rẽ trái?",
        "tip": "Biển 1: P.123a \"Cấm rẽ trái\" không cấm quay đầu xe; Biển 2: P.124a \"Cấm quay xe\" không cấm rẽ trái.\nNên Biển 1 là đáp án đúng.",
        "answers": [
            "Biển 1.",
            "Biển 2.",
            "Cả hai biển.",
        ],
        "correct":""
    },
    {
        "image": "q319.png",
        "no": 319,
        "index": 319,
        "text": "Khi gặp biển nào xe được rẽ trái?",
        "tip": "Biển 1: P.123a \"Cấm rẽ trái\" không cấm quay đầu xe; Biển 2: P.124a \"Cấm quay xe\" không cấm rẽ trái.\nNên Biển 2 là đáp án đúng.",
        "answers": [
            "Biển 1.",
            "Biển 2.",
            "Không biển nào.",
        ],
        "correct":""
    },
    {
        "image": "q320.png",
        "no": 320,
        "index": 320,
        "text": "Biển nào cấm ô tô rẽ trái?",
        "tip": "Biển 1: 123a \"Cấm rẽ trái\"; Biển 2: 124e \"Cấm ô tô rẽ trái và quay xe\" nên cả 2 biển đều cấm rẽ trái.",
        "answers": [
            "Biển 1.",
            "Biển 2.",
            "Cả hai biển.",
        ],
        "correct":""
    },
    {
        "image": "q321.png",
        "no": 321,
        "index": 321,
        "text": "Biển nào cấm các phương tiện giao thông đường bộ rẽ phải?",
        "tip": "Biển 1: 123b \"Cấm rẽ phải\"; Biển 2: 124d \"Cấm rẽ phải và quay xe\"; Biển 3: 124f \"Cấm ô tô rẽ phải và quay xe\".\nNên biển 3 chỉ cấm xe ô tô, còn biển 1 và biển 2 cấm toàn bộ phương tiện rẽ phải.",
        "answers": [
            "Biển 1 và 2.",
            "Biển 1 và 3.",
            "Biển 2 và 3.",
            "Cả ba biển.",
        ],
        "correct":""
    },
    {
        "image": "q322.png",
        "no": 322,
        "index": 322,
        "text": "Biển nào cấm các phương tiện giao thông đường bộ rẽ trái?",
        "tip": "Biển 1: 123a \"Cấm rẽ trái\"; Biển 2: 124c \"Cấm rẽ trái và quay xe\"; Biển 3: 124e \"Cấm ô tô rẽ trái và quay xe\".\nNên biển 3 chỉ cấm xe ô tô, còn biển 1 và biển 2 cấm toàn bộ phương tiện rẽ trái.",
        "answers": [
            "Biển 1 và 2.",
            "Biển 1 và 3",
            "Biển 2 và 3",
            "Cả ba biển.",
        ],
        "correct":""
    },
    {
        "image": "q323.png",
        "no": 323,
        "index": 323,
        "text": "Biển nào cấm cấm ô tô quay đầu?",
        "tip": "Biển 1: P.124b \"Cấm ô tô quay đầu xe\"; Biển 2: P.124e \"Cấm ôtô rẽ trái và quay xe\"; Biển 3: P.103b \"Cấm ô tô rẽ phải\" - Biển này không cấm quay đầu.",
        "answers": [
            "Biển 1 và 2.",
            "Biển 1 và 3.",
            "Biển 2 và 3.",
            "Không biển nào.",
        ],
        "correct":""
    },
    {
        "image": "q324.png",
        "no": 324,
        "index": 324,
        "text": "Biển nào cấm ô tô rẽ phải và quay đầu xe?",
        "tip": "Biển 1: P.124b \"Cấm ô tô quay đầu xe\"; Biển 2: P.124e \"Cấm ôtô rẽ trái và quay xe\"; Biển 3: P.124f \"Cấm ôtô rẽ phải và quay xe\"",
        "answers": [
            "Biển 1.",
            "Biển 2.",
            "Biển 3.",
            "Biển 1 và 3.",
        ],
        "correct":""
    },
    {
        "image": "q325.png",
        "no": 325,
        "index": 325,
        "text": "Biển nào cấm xe taxi mà không cấm các phương tiện khác?",
        "tip": "",
        "answers": [
            "Biển 1.",
            "Biển 2.",
            "Không biển nào",
        ],
        "correct":""
    },
    {
        "image": "q326.png",
        "no": 326,
        "index": 326,
        "text": "Biển nào cho phép xe rẽ trái?",
        "tip": "Theo QCVN41:2019 thì Biển 2: I.410 \"Khu vực quay xe\" chỉ dẫn khu vực được phép quay đầu xe. Biển này thuộc nhóm biển chỉ dẫn nên KHÔNG cấm rẽ trái. Do đó, đáp án đúng là câu 2.",
        "answers": [
            "Biển 1.",
            "Biển 2.",
            "Không biển nào.",
        ],
        "correct":""
    },
    {
        "image": "q327.png",
        "no": 327,
        "index": 327,
        "text": "Biển nào xe quay đầu không bị cấm?",
        "tip": "Biển 1: P.123a \"Cấm rẽ trái\" không cấm quay đầu xe; Biển 2: I.410 \"Khu vực quay xe\". Nên cả 2 biển cho phép quay đầu xe là đáp án đúng.",
        "answers": [
            "Biển 1.",
            "Biển 2.",
            "Cả 2 biển.",
        ],
        "correct":""
    },
    {
        "image": "q328.png",
        "no": 328,
        "index": 328,
        "text": "Biển nào xe được phép quay đầu nhưng không được rẽ trái?",
        "tip": "Biển 1: 123a \"Cấm rẽ trái\" nhưng không cấm quay đầu xe.\nBiển 2: R.301e đặt trước ngã ba ngã tư chỉ được rẽ trái ở phạm vi ngã ba, ngã tư phía sau mặt biển nên không thể quay đầu xe.",
        "answers": [
            "Biển 1.",
            "Biển 2.",
            "Cả 2 biển.",
        ],
        "correct":""
    },
    {
        "image": "q329.png",
        "no": 329,
        "index": 329,
        "text": "Biển nào là biển \"Cấm đi ngược chiều\"?",
        "tip": "Biển 1: P.101 \"Đường cấm\"; Biển 2: P.102 \"Cấm đi ngược chiều\"; Biển 3: P.301a \"Cấm đỗ xe\". Nên biển 2 là cấm đi ngược chiều.",
        "answers": [
            "Biển 1.",
            "Biển 2.",
            "Cả ba biển.",
        ],
        "correct":""
    },
    {
        "image": "q330.png",
        "no": 330,
        "index": 330,
        "text": "Biển nào dưới đây các phương tiện không được phép đi vào?",
        "tip": "Biển 1: P.101 \"Đường cấm\";\nBiển 2: P.102 \"Cấm đi ngược chiều\" cấm đi vào theo chiều đặt biển;\nBiển 3: P.301a \"Cấm đỗ xe\".\nNên biển 1 và biển 2 là cấm các phương tiện không được phép đi vào.",
        "answers": [
            "Biển 1.",
            "Biển 2.",
            "Biển 1 và 2.",
        ],
        "correct":""
    },
    {
        "image": "q331.png",
        "no": 331,
        "index": 331,
        "text": "Gặp biển nào người lái xe không được đỗ xe vào ngày chẵn?",
        "tip": "Biển 1: P.301a \"Cấm đỗ xe\" bất kỳ ngày nào; Biển 2: P301b \"Cấm đỗ xe\" vào ngày lẻ; Biển 3: P301c \"Cấm đỗ xe\" vào ngày chẵn. Nên biển 1 và biển 3 là cấm đỗ xe ngày chẵn.",
        "answers": [
            "Biển 1.",
            "Biển 1 và 3.",
            "Biển 2 và 3.",
            "Biển 3.",
        ],
        "correct":""
    },
    {
        "image": "q332.png",
        "no": 332,
        "index": 332,
        "text": "Gặp biển nào người lái xe không được đỗ xe vào ngày lẻ?",
        "tip": "Biển 1: P.301a \"Cấm đỗ xe\" bất kỳ ngày nào; Biển 2: P301b \"Cấm đỗ xe\" vào ngày lẻ; Biển 3: P301c \"Cấm đỗ xe\" vào ngày chẵn. Nên biển 1 và biển 2 là cấm đỗ xe ngày lẻ.",
        "answers": [
            "Biển 1 và 2.",
            "Biển 2.",
            "Biển 2 và 3.",
            "Biển 3.",
        ],
        "correct":""
    },
    {
        "image": "q333.png",
        "no": 333,
        "index": 333,
        "text": "Khi gặp biển nào xe ưu tiên theo luật định vẫn phải dừng lại?",
        "tip": "Biển 1: P.101 \"Đường cấm\" không cấm xe ưu tiên;\nBiển 2: R.122 \"Dừng lại\" áp dụng với cả xe ưu tiên;\nBiển 3: P.102 \"Cấm đi ngược chiều\" không áp dụng với xe ưu tiên;\nNên Biển 2 là đáp án đúng, áp dụng với cả xe ưu tiên.",
        "answers": [
            "Biển 1.",
            "Biển 2.",
            "Cả ba biển.",
        ],
        "correct":""
    },
    {
        "image": "q334.png",
        "no": 334,
        "index": 334,
        "text": "Biển nào cấm tất cả các loại xe cơ giới và thô sơ đi lại trên đường, trừ xe ưu tiên theo luật định (nếu đường vẫn cho xe chạy được)?",
        "tip": "Biển 1: P.101 \"Đường cấm\" không cấm xe ưu tiên;\nBiển 2: R.122 \"Dừng lại\" áp dụng với cả xe ưu tiên;\nNên Biển 1 là đáp án đúng.",
        "answers": [
            "Biển 1.",
            "Biển 2.",
            "Cả hai biển.",
        ],
        "correct":""
    },
    {
        "image": "q335.png",
        "no": 335,
        "index": 335,
        "text": "Biển nào là biển \"Cấm xe chở hàng nguy hiểm\"?",
        "tip": "Biển 1: P.106a \"Cấm xe tải\"; Biển 2: P.106b \"Cấm xe tải có khối lượng chuyên chở lớn hơn 2.5 tấn\"; P.106c: \"Cấm xe chở hàng nguy hiểm\".",
        "answers": [
            "Biển 1.",
            "Biển 2.",
            "Biển 3.",
        ],
        "correct":""
    },
    {
        "image": "q336.png",
        "no": 336,
        "index": 336,
        "text": "Gặp biển nào xe xích lô được phép đi vào?",
        "tip": "",
        "answers": [
            "Biển 1.",
            "Biển 2.",
            "Biển 3.",
            "Biển 1 và 2.",
        ],
        "correct":""
    },
    {
        "image": "q337.png",
        "no": 337,
        "index": 337,
        "text": "Gặp biển nào xe lam, xe xích lô máy được phép đi vào?",
        "tip": "",
        "answers": [
            "Biển 1.",
            "Biển 2.",
            "Biển 3.",
        ],
        "correct":""
    },
    {
        "image": "q338.png",
        "no": 338,
        "index": 338,
        "text": "Biển báo này có ý nghĩa gì?",
        "tip": "",
        "answers": [
            "Đường cấm súc vật vận tải hàng hóa.",
            "Đường cấm súc vật vận tải hành khách.",
            "Đường cấm súc vật vận tải hàng hóa hoặc hành khách dù kéo xe hay chở trên lưng đi qua.",
        ],
        "correct":""
    },
    {
        "image": "q339.png",
        "no": 339,
        "index": 339,
        "text": "Biển báo này có ý nghĩa như thế nào?",
        "tip": "",
        "answers": [
            "Tốc độ tối đa cho phép về ban đêm cho các phương tiện là 70 km/h.",
            "Tốc độ tối thiểu cho phép về ban đêm cho các phương tiện là 70 km/h.",
        ],
        "correct":""
    },
    {
        "image": "q340.png",
        "no": 340,
        "index": 340,
        "text": "Khi gặp các biển này xe ưu tiên theo luật định (có tải trọng hay chiều cao toàn bộ vượt quá chỉ số ghi trên biển) có được phép đi qua hay không?",
        "tip": "",
        "answers": [
            "Được phép.",
            "Không được phép.",
        ],
        "correct":""
    },
    {
        "image": "q341.png",
        "no": 341,
        "index": 341,
        "text": "Biển nào hạn chế chiều cao của xe và hàng?",
        "tip": "",
        "answers": [
            "Biển 1.",
            "Biển 2.",
            "Biển 3.",
        ],
        "correct":""
    },
    {
        "image": "q342.png",
        "no": 342,
        "index": 342,
        "text": "Biển số 2 có ý nghĩa như thế nào?",
        "tip": "",
        "answers": [
            "Cho phép ô tô có tải trọng trục lớn hơn 7 tấn đi qua.",
            "Cho phép ô tô có tải trọng trên trục xe từ 7 tấn trở xuống đi qua.",
        ],
        "correct":""
    },
    {
        "image": "q343.png",
        "no": 343,
        "index": 343,
        "text": "Biển 3 có ý nghĩa như thế nào?",
        "tip": "",
        "answers": [
            "Cấm các loại xe có tải trọng toàn bộ trên 10 tấn đi qua.",
            "Hạn chế khối lượng hàng hóa chở trên xe.",
            "Hạn chế tải trọng trên trục xe.",
        ],
        "correct":""
    },
    {
        "image": "q344.png",
        "no": 344,
        "index": 344,
        "text": "Biển nào cấm máy kéo kéo theo rơ moóc?",
        "tip": "Biển 1: P.108 \"Cấm ô tô kéo moóc\"; Biển 2: P.109 \"Cấm máy kéo\". Đáp án đúng là cả 2 biển.",
        "answers": [
            "Biển 1.",
            "Biển 2.",
            "Cả hai biển.",
        ],
        "correct":""
    },
    {
        "image": "q345.png",
        "no": 345,
        "index": 345,
        "text": "Khi gặp biển 1, xe ô tô tải có được đi vào không?",
        "tip": "Biển 1: P.108 \"Cấm ô tô kéo moóc\" không áp dụng với xe ô tô tải (không kéo rơ moóc).",
        "answers": [
            "Được đi vào.",
            "Không được đi vào.",
        ],
        "correct":""
    },
    {
        "image": "q346.png",
        "no": 346,
        "index": 346,
        "text": "Biển nào không có hiệu lực đối với ô tô tải không kéo moóc?",
        "tip": "Biển 1: P.108 \"Cấm ô tô kéo moóc\" không áp dụng với ô tô tải không kéo rơ moóc;\nBiển 2: P.109 \"Cấm máy kéo\" không áp dụng với xe ô tô tải.\nBiển 3: P.103a \"Cấm ô tô\" thì cấm ô tô tải.\nDo đó đáp án đúng là biển 1 và 2.",
        "answers": [
            "Biển 1 và 2.",
            "Biển 2 và 3.",
            "Biển 1 và 3.",
            "Cả ba biển.",
        ],
        "correct":""
    },
    {
        "image": "q347.png",
        "no": 347,
        "index": 347,
        "text": "Biển nào cấm máy kéo?",
        "tip": "Biển 1: P.108 \"Cấm ô tô kéo moóc\"; Biển 2: P.109 \"Cấm máy kéo\"; Biển 3: P.106a \"Cấm ô tô tải\" thì cấm máy kéo. Nên đáp án đúng là Biển 2 và Biển 3.",
        "answers": [
            "Biển 1 và 2.",
            "Biển 1 và 3.",
            "Biển 2 và 3.",
            "Cả ba biển.",
        ],
        "correct":""
    },
    {
        "image": "q348.png",
        "no": 348,
        "index": 348,
        "text": "Khi gặp biển này, xe mô tô ba bánh có được phép rẽ trái hoặc rẽ phải hay không?",
        "tip": "",
        "answers": [
            "Được phép.",
            "Không được phép.",
        ],
        "correct":""
    },
    {
        "image": "q349.png",
        "no": 349,
        "index": 349,
        "text": "Biển này có hiệu lực đối với xe mô tô hai, ba bánh không?",
        "tip": "",
        "answers": [
            "Có.",
            "Không.",
        ],
        "correct":""
    },
    {
        "image": "q350.png",
        "no": 350,
        "index": 350,
        "text": "Biển này có ý nghĩa gì?",
        "tip": "",
        "answers": [
            "Cấm xe cơ giới (trừ xe ưu tiên theo luật định) đi thẳng.",
            "Cấm xe ô tô và mô tô (trừ xe ưu tiên theo luật định) đi về bên trái và bên phải.",
            "Hướng trái và phải không cấm xe cơ giới.",
        ],
        "correct":""
    },
    {
        "image": "q351.png",
        "no": 351,
        "index": 351,
        "text": "Biển phụ đặt dưới biển cấm bóp còi có ý nghĩa gì?",
        "tip": "Biển phụ là biển S.501 \"Phạm vi tác dụng của biển\" xác định chiều dài áp dụng biển chính từ nơi đặt biển.",
        "answers": [
            "Báo khoảng cách đến nơi cấm bóp còi.",
            "Chiều dài đoạn đường cấm bóp còi từ nơi đặt biển.",
            "Báo cấm dùng còi có độ vang xa 500 m.",
        ],
        "correct":""
    },
    {
        "image": "q352.png",
        "no": 352,
        "index": 352,
        "text": "Chiều dài đoạn đường 500 m từ nơi đặt biển này, người lái xe có được phép bấm còi không?",
        "tip": "Biển phụ là biển S.501 \"Phạm vi tác dụng của biển\" xác định chiều dài áp dụng biển chính từ nơi đặt biển.",
        "answers": [
            "Được phép.",
            "Không được phép.",
        ],
        "correct":""
    },
    {
        "image": "q353.png",
        "no": 353,
        "index": 353,
        "text": "Biển nào xe mô tô hai bánh được đi vào?",
        "tip": "Biển chính là P.101 \"Đường cấm\", có biển phụ thì áp dụng cấm theo biển phụ. Nên Biển 1 và Biển 3 không áp dụng với xe mô tô là câu trả lời đúng.",
        "answers": [
            "Biển 1 và 2.",
            "Biển 1 và 3.",
            "Biển 2 và 3.",
        ],
        "correct":""
    },
    {
        "image": "q354.png",
        "no": 354,
        "index": 354,
        "text": "Biển nào xe mô tô hai bánh không được đi vào?",
        "tip": "Biển chính là P.101 \"Đường cấm\", có biển phụ thì áp dụng kèm theo biển phụ. Nên Biển 2 áp dụng với xe mô tô là câu trả lời đúng.",
        "answers": [
            "Biển 1.",
            "Biển 2",
            "Biển 3",
        ],
        "correct":""
    },
    {
        "image": "q355.png",
        "no": 355,
        "index": 355,
        "text": "Ba biển này có hiệu lực như thế nào?",
        "tip": "Biển chính là P.101 \"Đường cấm\", có biển phụ thì áp dụng cấm theo biển phụ.",
        "answers": [
            "Cấm các loại xe ở biển phụ đi vào.",
            "Cấm các loại xe cơ giới đi vào trừ loại xe ở biển phụ.",
        ],
        "correct":""
    },
    {
        "image": "q356.png",
        "no": 356,
        "index": 356,
        "text": "Biển nào báo hiệu chiều dài đoạn đường phải giữ cự ly tối thiểu giữa hai xe?",
        "tip": "Biển phụ 1: S.501 \"Phạm vi tác dụng của biển\";\nBiển phụ 2: S.502 \"Khoảng cách đến đối tượng báo hiệu\".\nNên Biển phụ 1 là đáp án đúng.",
        "answers": [
            "Biển 1.",
            "Biển 2.",
            "Cả hai biển.",
        ],
        "correct":""
    },
    {
        "image": "q357.png",
        "no": 357,
        "index": 357,
        "text": "Biển nào báo hiệu khoảng cách thực tế từ nơi đặt biển đến nơi cần cự ly tối thiểu giữa hai xe?",
        "tip": "Biển phụ 1: S.501 \"Phạm vi tác dụng của biển\";\nBiển phụ 2: S.502 \"Khoảng cách đến đối tượng báo hiệu\".\nNên Biển phụ 2 là đáp án đúng.",
        "answers": [
            "Biển 1.",
            "Biển 2.",
            "Cả hai biển.",
        ],
        "correct":""
    },
    {
        "image": "q358.png",
        "no": 358,
        "index": 358,
        "text": "Biển này có ý nghĩa gì?",
        "tip": "",
        "answers": [
            "Cấm dừng xe về hướng bên trái.",
            "Cấm đỗ xe và cấm dừng xe theo hướng bên phải.",
            "Được phép đỗ xe và dừng xe theo hướng bên phải.",
        ],
        "correct":""
    },
    {
        "image": "q359.png",
        "no": 359,
        "index": 359,
        "text": "Theo hướng bên phải có được phép đỗ xe, dừng xe không?",
        "tip": "",
        "answers": [
            "Không được phép.",
            "Được phép.",
        ],
        "correct":""
    },
    {
        "image": "q360.png",
        "no": 360,
        "index": 360,
        "text": "Gặp biển này, xe ô tô sơ mi rơ moóc có chiều dài toàn bộ kể cả xe, moóc và hàng lớn hơn trị số ghi trên biển có được phép đi vào không?",
        "tip": "",
        "answers": [
            "Không được phép.",
            "Được phép.",
        ],
        "correct":""
    },
    {
        "image": "q361.png",
        "no": 361,
        "index": 361,
        "text": "Xe ô tô chở hàng vượt quá phía trước và sau thùng xe, mỗi phía quá 10% chiều dài toàn bộ thân xe, tổng chiều dài xe (cả hàng) từ trước đến sau nhỏ hơn trị số ghi trên biển thì có được phép đi vào không?",
        "tip": "",
        "answers": [
            "Không được phép",
            "Được phép",
        ],
        "correct":""
    },
    {
        "image": "q362.png",
        "no": 362,
        "index": 362,
        "text": "Biển này có ý nghĩa gì?",
        "tip": "",
        "answers": [
            "Cấm ô tô buýt.",
            "Cấm ô tô chở khách.",
            "Cấm ô tô con.",
        ],
        "correct":""
    },
    {
        "image": "q363.png",
        "no": 363,
        "index": 363,
        "text": "Biển này có ý nghĩa gì?",
        "tip": "",
        "answers": [
            "Hạn chế chiều cao của xe và hàng.",
            "Hạn chế chiều ngang của xe và hàng.",
            "Hạn chế chiều dài của xe và hàng.",
        ],
        "correct":""
    },
    {
        "image": "q364.png",
        "no": 364,
        "index": 364,
        "text": "Biển nào là biển \"Tốc độ tối đa cho phép về ban đêm\"?",
        "tip": "",
        "answers": [
            "Biển 1.",
            "Biển 2.",
            "Cả 2 biển.",
        ],
        "correct":""
    },
    {
        "image": "q365.png",
        "no": 365,
        "index": 365,
        "text": "Biển báo nào báo hiệu bắt đầu đoạn đường vào phạm vi khu dân cư, các phương tiện tham gia giao thông phải tuân theo các quy định đi đường được áp dụng ở khu đông dân cư?",
        "tip": "",
        "answers": [
            "Biển 1.",
            "Biển 2.",
        ],
        "correct":""
    },
    {
        "image": "q366.png",
        "no": 366,
        "index": 366,
        "text": "Biển nào báo hiệu hạn chế tốc độ của phương tiện không vượt quá trị số ghi trên biển?",
        "tip": "",
        "answers": [
            "Biển 1.",
            "Biển 2.",
        ],
        "correct":""
    },
    {
        "image": "q367.png",
        "no": 367,
        "index": 367,
        "text": "Trong các biển báo dưới đây biển nào báo hiệu \"Hết đường cao tốc\"?",
        "tip": "",
        "answers": [
            "Biển 1.",
            "Biển 2.",
            "Biển 3.",
        ],
        "correct":""
    },
    {
        "image": "q368.png",
        "no": 368,
        "index": 368,
        "text": "Số 50 trên biển báo dưới đây có ý nghĩa gì?",
        "tip": "Biển số P.127 \"Tốc độ tối đa cho phép\"",
        "answers": [
            "Tốc độ tối đa các xe cơ giới được phép chạy.",
            "Tốc độ tối thiểu các xe cơ giới được phép chạy.",
        ],
        "correct":""
    },
    {
        "image": "q369.png",
        "no": 369,
        "index": 369,
        "text": "Trong các biển báo dưới đây biển nào chỉ dẫn bắt đầu đường cao tốc.",
        "tip": "",
        "answers": [
            "Biển 1.",
            "Biển 2.",
            "Cả biển 1 và biển 2.",
        ],
        "correct":""
    },
    {
        "image": "q370.png",
        "no": 370,
        "index": 370,
        "text": "Biển báo này có ý nghĩa gì?",
        "tip": "Biển số R.306 \"Tốc độ tối thiểu cho phép\"",
        "answers": [
            "Báo hiệu tốc độ tối đa cho phép các xe cơ giới chạy.",
            "Báo hiệu tốc độ tối thiểu cho phép các xe cơ giới chạy.",
        ],
        "correct":""
    },
    {
        "image": "q371.png",
        "no": 371,
        "index": 371,
        "text": "Gặp biển nào người lái xe phải nhường đường cho người đi bộ?",
        "tip": "Biển 1: W.224 \"Đường người đi bộ cắt ngang\"; Biển 2: P.112 \"Cấm người đi bộ\"; Biển 3: R.305 \"Đường dành cho người đi bộ\".\nBiển 1 báo ưu tiên cho người đi bộ nên phải nhường đường.",
        "answers": [
            "Biển 1.",
            "Biển 2.",
            "Biển 3.",
            "Biển 1 và 3.",
        ],
        "correct":""
    },
    {
        "image": "q372.png",
        "no": 372,
        "index": 372,
        "text": "Biển nào chỉ đường dành cho người đi bộ, các loại xe không được đi vào khi gặp biển này?",
        "tip": "Biển 1: W.224 \"Đường người đi bộ cắt ngang\"; Biển 2: P.112 \"Cấm người đi bộ\"; Biển 3: R.305 \"Đường dành cho người đi bộ\".\nBiển 3 báo đường dành cho người đi bộ nên phương tiện khác không được đi vào.",
        "answers": [
            "Biển 1.",
            "Biển 1 và 3",
            "Biển 3.",
            "Cả ba biển.",
        ],
        "correct":""
    },
    {
        "image": "q373.png",
        "no": 373,
        "index": 373,
        "text": "Biển nào báo hiệu \"Đường dành cho xe thô sơ\"?",
        "tip": "",
        "answers": [
            "Biển 1.",
            "Biển 2.",
            "Biển 3.",
        ],
        "correct":""
    },
    {
        "image": "q374.png",
        "no": 374,
        "index": 374,
        "text": "Biển nào báo hiệu sắp đến chỗ giao nhau nguy hiểm?",
        "tip": "Biển 1: W.210 \"Giao nhau với đường sắt có rào chắn\"; Biển 2: W.208 \"Giao nhau với đường ưu tiên\"; Biển 3: W.209 \"Giao nhau có tín hiệu đèn\".",
        "answers": [
            "Biển 1.",
            "Biển 1 và 2.",
            "Biển 2 và 3.",
            "Cả ba biển.",
        ],
        "correct":""
    },
    {
        "image": "q375.png",
        "no": 375,
        "index": 375,
        "text": "Biển nào báo hiệu \"Giao nhau với đường sắt có rào chắn\"?",
        "tip": "Biển 1: W.210 \"Giao nhau với đường sắt có rào chắn\"; Biển 2: W.208 \"Giao nhau với đường ưu tiên\"; Biển 3: W.209 \"Giao nhau có tín hiệu đèn\".",
        "answers": [
            "Biển 1.",
            "Biển 2 và 3.",
            "Biển 3.",
        ],
        "correct":""
    },
    {
        "image": "q376.png",
        "no": 376,
        "index": 376,
        "text": "Biển nào báo hiệu \"Giao nhau có tín hiệu đèn\"?",
        "tip": "Biển 1: W.210 \"Giao nhau với đường sắt có rào chắn\"; Biển 2: W.208 \"Giao nhau với đường ưu tiên\"; Biển 3: W.209 \"Giao nhau có tín hiệu đèn\".",
        "answers": [
            "Biển 1.",
            "Biển 2.",
            "Biển 3.",
            "Cả ba biển.",
        ],
        "correct":""
    },
    {
        "image": "q377.png",
        "no": 377,
        "index": 377,
        "text": "Biển nào báo hiệu nguy hiểm giao nhau với đường sắt?",
        "tip": "Biển 1: W.210 \"Giao nhau với đường sắt có rào chắn\"; Biển 2: W.234 \"Giao nhau với đường hai chiều\"; Biển 3: W.242a \"Nơi đường sắt giao vuông góc với đường bộ\".",
        "answers": [
            "Biển 1 và 2.",
            "Biển 1 và 3.",
            "Biển 2 và 3.",
            "Cả ba biển.",
        ],
        "correct":""
    },
    {
        "image": "q378.png",
        "no": 378,
        "index": 378,
        "text": "Biển nào báo hiệu Đường sắt giao nhau với đường bộ không có rào chắn?",
        "tip": "Biển 1: W.210 \"Giao nhau với đường sắt có rào chắn\"; Biển 2: W.211a \"Giao nhau với đường sắt không có rào chắn\"; Biển 3: W.242a \"Nơi đường sắt giao vuông góc với đường bộ\" bổ sung cho biển W.211a. Nên cả 2 biển 2 và 3 đều đúng.",
        "answers": [
            "Biển 1 và 2.",
            "Biển 1 và 3.",
            "Biển 2 và 3.",
            "Cả ba biển.",
        ],
        "correct":""
    },
    {
        "image": "q379.png",
        "no": 379,
        "index": 379,
        "text": "Biển nào báo hiệu sắp đến chỗ giao nhau giữa đường bộ và đường sắt?",
        "tip": "Biển 1: Biển 211a Giao nhau với đường sắt không có rào chắn.\nBiển 2: Biển 208 Giao nhau với đường ưu tiên.\nBiển 3: Biển 211b Giao nhau với tàu điện.",
        "answers": [
            "Biển 1.",
            "Biển 2.",
            "Biển 3.",
            "Biển 1 và 3.",
        ],
        "correct":""
    },
    {
        "image": "q380.png",
        "no": 380,
        "index": 380,
        "text": "Biển nào báo hiệu \"Cửa chui\"?",
        "tip": "Biển 1: W.237 \"Cầu vòng\"; Biển 2: W.218 \"Cửa chui\"; Biển 3: W.240 \"Đường hầm\". Đáp án đúng là đáp án 2.",
        "answers": [
            "Biển 1.",
            "Biển 2.",
            "Biển 3.",
        ],
        "correct":""
    },
    {
        "image": "q381.png",
        "no": 381,
        "index": 381,
        "text": "Hai biển này có ý nghĩa gì?",
        "tip": "Hai biển này là 242a và 242b \"Nơi đường sắt giao nhau vuông góc với đường bộ\" bổ sung cho biển 211 \"Giao nhau với đường sắt không có rào chắn\". Do đó câu trả lời 1 đúng.",
        "answers": [
            "Để chỉ nơi đường sắt giao vuông góc với đường bộ không có rào chắn.",
            "Để báo trước sắp đến vị trí giao cắt đường bộ với đường sắt cùng mức, không vuông góc và không có người gác, không có rào chắn.",
            "Nơi đường sắt giao nhau với đường bộ.",
        ],
        "correct":""
    },
    {
        "image": "q382.png",
        "no": 382,
        "index": 382,
        "text": "Biển nào báo hiệu \"Nơi đường sắt giao vuông góc với đường bộ\"?",
        "tip": "Biển 1 và Biển 2 là 242a và 242b \"Nơi đường sắt giao nhau vuông góc với đường bộ\" bổ sung cho biển 211 \"Giao nhau với đường sắt không có rào chắn\".\n Biển 3 là 243a \"Nơi giao nhau không vuông góc với đường bộ\".",
        "answers": [
            "Biển 1.",
            "Biển 2.",
            "Biển 3.",
            "Biển 1 và 2.",
        ],
        "correct":""
    },
    {
        "image": "q383.png",
        "no": 383,
        "index": 383,
        "text": "Các biển này có ý nghĩa gì?",
        "tip": "Ba biển này là 243a, a43b và 243c Nơi giao nhau không vuông góc với đường sắt, không có người gác và không có rào chắn với đường sắt.",
        "answers": [
            "Nơi đường sắt giao nhau với đường bộ.",
            "Nơi đường sắt giao vuông góc với đường bộ.",
            "Để báo trước sắp đến vị trí đường sắt giao không vuông góc với đường bộ, không có người gác và không có rào chắn.",
        ],
        "correct":""
    },
    {
        "image": "q384.png",
        "no": 384,
        "index": 384,
        "text": "Biển nào báo hiệu \"Hết đoạn đường ưu tiên\"?",
        "tip": "Biển 1: W.207a \"Giao nhau với đường không ưu tiên\";\nBiển 2: W.208 \"Giao nhau với đường ưu tiên\";\nBiển 3: I.402 \"Hết đường ưu tiên\".",
        "answers": [
            "Biển 1.",
            "Biển 2.",
            "Biển 3.",
        ],
        "correct":""
    },
    {
        "image": "q385.png",
        "no": 385,
        "index": 385,
        "text": "Biển nào báo hiệu, chỉ dẫn xe đi trên đường này được quyền ưu tiên qua nơi giao nhau?",
        "tip": "Biển 1: W.207a \"Giao nhau với đường không ưu tiên\";\nBiển 2: W.208 \"Giao nhau với đường ưu tiên\";\nBiển 3: I.401 \"Bắt đầu đường ưu tiên\". Nên Biển 1 và Biển 3 là đáp án đúng.",
        "answers": [
            "Biển 1 và 2.",
            "Biển 1 và 3.",
            "Biển 2 và 3.",
            "Cả ba biển.",
        ],
        "correct":""
    },
    {
        "image": "q386.png",
        "no": 386,
        "index": 386,
        "text": "Biển nào báo hiệu \"Giao nhau với đường không ưu tiên\"?",
        "tip": "Biển 1: W.207a \"Giao nhau với đường không ưu tiên\";\nBiển 2: W.208 \"Giao nhau với đường ưu tiên\";\nBiển 3: I.401 \"Bắt đầu đường ưu tiên\".",
        "answers": [
            "Biển 1.",
            "Biển 2.",
            "Biển 3.",
            "Biển 2 và 3.",
        ],
        "correct":""
    },
    {
        "image": "q387.png",
        "no": 387,
        "index": 387,
        "text": "Biển nào báo hiệu \"Giao nhau với đường ưu tiên\"?",
        "tip": "Biển 1: W.207a \"Giao nhau với đường không ưu tiên\";\nBiển 2: W.208 \"Giao nhau với đường ưu tiên\";\nBiển 3: I.401 \"Bắt đầu đường ưu tiên\".",
        "answers": [
            "Biển 1 và 3.",
            "Biển 2.",
            "Biển 3.",
        ],
        "correct":""
    },
    {
        "image": "q388.png",
        "no": 388,
        "index": 388,
        "text": "Biển nào báo hiệu \"Đường bị thu hẹp\"?",
        "tip": "Biển 1: W.203a \"Đường bị hẹp cả hai bên\"; Biển 2: W203b \"Đường bị hẹp về phía trái\"; Biển 3: W.201b \"Chỗ ngoặt nguy hiểm vòng bên phải\". Nên đáp án đúng là Biển 1 và Biển 2.",
        "answers": [
            "Biển 1 và 2.",
            "Biển 1 và 3.",
            "Biển 2 và 3.",
            "Cả ba biển.",
        ],
        "correct":""
    },
    {
        "image": "q389.png",
        "no": 389,
        "index": 389,
        "text": "Khi gặp biển nào, người lái xe phải giảm tốc độ, chú ý xe đi ngược chiều, xe đi ở phía đường bị hẹp phải nhường đường cho xe đi ngược chiều?",
        "tip": "Biển 1: W.236 \"Hết đường đôi\"; Biển 2: W203b \"Đường bị hẹp về phía trái\"; Biển 3: W203c \"Đường bị hẹp về phía phải\".\nCâu này hỏi về việc đường bị thu hẹp nên câu trả lời đúng là Biển 2 và Biển 3.",
        "answers": [
            "Biển 1.",
            "Biển 1 và 3.",
            "Biển 2 và 3.",
            "Cả ba biển.",
        ],
        "correct":""
    },
    {
        "image": "q390.png",
        "no": 390,
        "index": 390,
        "text": "Biển nào báo hiệu \"Giao nhau với đường ưu tiên\"?",
        "tip": "Biển 1: W.205a \"Đường giao nhau\" cùng cấp; Biển 2: W.207a \"Giao nhau với đường không ưu tiên\"; Biển 3: W.208 \"Giao nhau với đường ưu tiên\";",
        "answers": [
            "Biển 1.",
            "Biển 2.",
            "Biển 3.",
            "Cả ba biển.",
        ],
        "correct":""
    },
    {
        "image": "q391.png",
        "no": 391,
        "index": 391,
        "text": "Biển nào báo hiệu \"Đường giao nhau\" của các tuyến đường cùng cấp?",
        "tip": "Biển 1: W.205a \"Đường giao nhau\" cùng cấp; Biển 2: W.207a \"Giao nhau với đường không ưu tiên\"; Biển 3: W.208 \"Giao nhau với đường ưu tiên\";",
        "answers": [
            "Biển 1.",
            "Biển 2.",
            "Biển 3.",
        ],
        "correct":""
    },
    {
        "image": "q392.png",
        "no": 392,
        "index": 392,
        "text": "Biển nào báo hiệu \"Giao nhau với đường không ưu tiên\"?",
        "tip": "Biển 1: W.205a \"Đường giao nhau\" cùng cấp; Biển 2: W.207a \"Giao nhau với đường không ưu tiên\"; Biển 3: W.208 \"Giao nhau với đường ưu tiên\";",
        "answers": [
            "Biển 1.",
            "Biển 2.",
            "Biển 3.",
        ],
        "correct":""
    },
    {
        "image": "q393.png",
        "no": 393,
        "index": 393,
        "text": "Biển nào báo hiệu \"Đường hai chiều\"?",
        "tip": "Biển 1: W.204 \"Đường hai chiều\";\nBiển 2: P.132 \"Nhường đường cho xe cơ giới đi ngược chiều qua đường hẹp\";\nBiển 3: I.406 \"Được ưu tiên qua đường hẹp\".",
        "answers": [
            "Biển 1.",
            "Biển 2.",
            "Biển 3.",
        ],
        "correct":""
    },
    {
        "image": "q394.png",
        "no": 394,
        "index": 394,
        "text": "Biển nào báo hiệu phải giảm tốc độ, nhường đường cho xe cơ giới đi ngược chiều qua đường hẹp?",
        "tip": "Biển 1: W.204 \"Đường hai chiều\";\nBiển 2: P.132 \"Nhường đường cho xe cơ giới đi ngược chiều qua đường hẹp\";\nBiển 3: I.406 \"Được ưu tiên qua đường hẹp\".",
        "answers": [
            "Biển 1",
            "Biển 2",
            "Biển 3",
        ],
        "correct":""
    },
    {
        "image": "q395.png",
        "no": 395,
        "index": 395,
        "text": "Biển nào chỉ dẫn \"Được ưu tiên qua đường hẹp\"?",
        "tip": "Biển 1: W.204 \"Đường hai chiều\";\nBiển 2: P.132 \"Nhường đường cho xe cơ giới đi ngược chiều qua đường hẹp\";\nBiển 3: I.406 \"Được ưu tiên qua đường hẹp\".",
        "answers": [
            "Biển 1.",
            "Biển 2",
            "Biển 3.",
            "Biển 2 và 3.",
        ],
        "correct":""
    },
    {
        "image": "q396.png",
        "no": 396,
        "index": 396,
        "text": "Biển nào báo hiệu \"Đường đôi\"?",
        "tip": "",
        "answers": [
            "Biển 1.",
            "Biển 2.",
            "Biển 3.",
        ],
        "correct":""
    },
    {
        "image": "q397.png",
        "no": 397,
        "index": 397,
        "text": "Biển nào báo hiệu \"Đường đôi\"?",
        "tip": "",
        "answers": [
            "Biển 1.",
            "Biển 2.",
            "Biển 3.",
        ],
        "correct":""
    },
    {
        "image": "q398.png",
        "no": 398,
        "index": 398,
        "text": "Biển nào báo hiệu \"Kết thúc đường đôi\"?",
        "tip": "",
        "answers": [
            "Biển 1.",
            "Biển 2.",
            "Biển 3.",
        ],
        "correct":""
    },
    {
        "image": "q399.png",
        "no": 399,
        "index": 399,
        "text": "Biển nào báo hiệu \"Giao nhau với đường hai chiều\"?",
        "tip": "",
        "answers": [
            "Biển 1.",
            "Biển 2.",
            "Biển 3.",
        ],
        "correct":""
    },
    {
        "image": "q400.png",
        "no": 400,
        "index": 400,
        "text": "Biển nào báo hiệu \"Đường hai chiều\"?",
        "tip": "",
        "answers": [
            "Biển 1.",
            "Biển 2.",
            "Biển 3.",
        ],
        "correct":""
    },
    {
        "image": "q401.png",
        "no": 401,
        "index": 401,
        "text": "Biển nào báo hiệu \"Giao nhau với đường hai chiều\"?",
        "tip": "",
        "answers": [
            "Biển 1.",
            "Biển 2.",
            "Biển 3.",
        ],
        "correct":""
    },
    {
        "image": "q402.png",
        "no": 402,
        "index": 402,
        "text": "Biển nào báo hiệu \"Chú ý chướng ngại vật\"?",
        "tip": "",
        "answers": [
            "Biển 1.",
            "Biển 2 và 3.",
            "Cả ba biển.",
        ],
        "correct":""
    },
    {
        "image": "q403.png",
        "no": 403,
        "index": 403,
        "text": "Biển nào chỉ dẫn cho người tham gia giao thông biết vị trí và khoảng cách có làn đường cứu nạn hay làn thoát xe khẩn cấp?",
        "tip": "",
        "answers": [
            "Biển 1.",
            "Biển 2.",
            "Cả hai biển.",
        ],
        "correct":""
    },
    {
        "image": "q404.png",
        "no": 404,
        "index": 404,
        "text": "Biển nào báo hiệu \"Đường hầm\"?",
        "tip": "",
        "answers": [
            "Cả ba biển.",
            "Biển 2.",
            "Biển 2 và 3.",
        ],
        "correct":""
    },
    {
        "image": "q405.png",
        "no": 405,
        "index": 405,
        "text": "Biển nào dưới đây là biển \"Cầu hẹp\"?",
        "tip": "Biển 1: W.213 \"Cầu tạm\"; Biển 2: W.212 \"Cầu hẹp\"; Biển 3: W.214 \"Cầu xoay - cầu cất\".",
        "answers": [
            "Biển 1.",
            "Biển 2.",
            "Biển 3.",
        ],
        "correct":""
    },
    {
        "image": "q406.png",
        "no": 406,
        "index": 406,
        "text": "Biển nào dưới đây là biển \"Cầu xoay - cầu cất\"?",
        "tip": "Biển 1: W.213 \"Cầu tạm\"; Biển 2: W.212 \"Cầu hẹp\"; Biển 3: W.214 \"Cầu xoay - cầu cất\".",
        "answers": [
            "Biển 1.",
            "Biển 2.",
            "Biển 3.",
        ],
        "correct":""
    },
    {
        "image": "q407.png",
        "no": 407,
        "index": 407,
        "text": "Biển nào dưới đây là biển \"Kè, vực sâu phía trước\"?",
        "tip": "Biển 1: W.215a \"Kè, vực sâu phía trước\";\nBiển 2: W.215b \"Kè, vực sâu bên đường phía bên phải\";\nBiển 3: W.215c \"Kè, vực sâu bên đường phía bên trái\".",
        "answers": [
            "Biển 1.",
            "Biển 2.",
            "Biển 3.",
        ],
        "correct":""
    },
    {
        "image": "q408.png",
        "no": 408,
        "index": 408,
        "text": "Biển nào sau đây là biển \"Kè, vực sâu bên đường phía bên trái\"?",
        "tip": "Biển 1: W.215a \"Kè, vực sâu phía trước\";\nBiển 2: W.215b \"Kè, vực sâu bên đường phía bên phải\";\nBiển 3: W.215c \"Kè, vực sâu bên đường phía bên trái\".",
        "answers": [
            "Biển 1.",
            "Biển 2.",
            "Biển 3.",
            "Biển 1 và Biển 2.",
        ],
        "correct":""
    },
    {
        "image": "q409.png",
        "no": 409,
        "index": 409,
        "text": "Biển nào sau đây là biển \"Kè, vực sâu bên đường phía bên phải\"?",
        "tip": "Biển 1: W.215a \"Kè, vực sâu phía trước\";\nBiển 2: W.215b \"Kè, vực sâu bên đường phía bên phải\";\nBiển 3: W.215c \"Kè, vực sâu bên đường phía bên trái\".",
        "answers": [
            "Biển 1.",
            "Biển 2.",
            "Biển 3.",
        ],
        "correct":""
    },
    {
        "image": "q410.png",
        "no": 410,
        "index": 410,
        "text": "Biển nào sau đây là biển \"Đường trơn\"?",
        "tip": "Biển 1: W201c \"Chỗ ngoặt nguy hiểm có nguy cơ lật xe bên phải khi đường cong vòng sang trái\"; Biển 2: W.222a \"Đường trơn\"; Biển 3: W217 \"Bến phà\".",
        "answers": [
            "Biển 1.",
            "Biển 2.",
            "Biển 3.",
        ],
        "correct":""
    },
    {
        "image": "q411.png",
        "no": 411,
        "index": 411,
        "text": "Biển nào sau đây là biển \"Lề đường nguy hiểm\"?",
        "tip": "Biển 1: W.215b \"Kè, vực sâu bên đường phía bên phải\"; Biển 2: W.222b \"Lề đường nguy hiểm\"; Biển 3: W201c \"Chỗ ngoặt nguy hiểm có nguy cơ lật xe\".",
        "answers": [
            "Biển 1.",
            "Biển 2",
            "Biển 3.",
        ],
        "correct":""
    },
    {
        "image": "q412.png",
        "no": 412,
        "index": 412,
        "text": "Biển nào sau đây báo trước gần tới đoạn đường đang tiến hành thi công?",
        "tip": "Biển 1: W.227 \"Công trường\"; Biển 2: W.228b \"Đá lở\"; Biển 3: W.228c \"Sỏi đá bắn lên\".",
        "answers": [
            "Biển 1.",
            "Biển 2.",
            "Biển 3.",
            "Không biển nào.",
        ],
        "correct":""
    },
    {
        "image": "q413.png",
        "no": 413,
        "index": 413,
        "text": "Biển nào dưới đây cảnh báo nguy hiểm đoạn đường thường xảy ra tai nạn?",
        "tip": "Biển 1: W.241 \"Ùn tắc giao thông\"; Biển 2: W.244 \"Đoạn đường hay xảy ra tai nạn\"; Biển 3: W.201c \"Chỗ ngoặt nguy hiểm có nguy cơ lật xe\".",
        "answers": [
            "Biển 1.",
            "Biển 2.",
            "Biển 3.",
        ],
        "correct":""
    },
    {
        "image": "q414.png",
        "no": 414,
        "index": 414,
        "text": "Biển nào báo hiệu đoạn đường hay xảy ra ùn tắc giao thông?",
        "tip": "Biển 1: W.240 \"Đường hầm\"; Biển 2: W.241 \"Ùn tắc giao thông\"; Biển 3: W.244 \"Đoạn đường hay xảy ra tai nạn\"",
        "answers": [
            "Biển 1.",
            "Biển 2.",
            "Biển 3.",
            "Cả 3 biển.",
        ],
        "correct":""
    },
    {
        "image": "q415.png",
        "no": 415,
        "index": 415,
        "text": "Gặp biển nào người tham gia giao thông phải đi chậm và thận trọng đề phòng khả năng xuất hiện và di chuyển bất ngờ của trẻ em trên mặt đường?",
        "tip": "Biển 1: W.224 \"Đường người đi bộ cắt ngang\"; Biển 2: W.225 \"Trẻ em\".",
        "answers": [
            "Biển 1.",
            "Biển 2.",
        ],
        "correct":""
    },
    {
        "image": "q416.png",
        "no": 416,
        "index": 416,
        "text": "Biển nào chỉ dẫn nơi bắt đầu đoạn đường dành cho người đi bộ?",
        "tip": "Biển 1: W.224 \"Đường người đi bộ cắt ngang\"; Biển 2: I.423c \"Điểm bắt đầu đường đi bộ\"; Biển 3: W.225 \"Trẻ em\".",
        "answers": [
            "Biển 1.",
            "Biển 2.",
            "Biển 3.",
        ],
        "correct":""
    },
    {
        "image": "q417.png",
        "no": 417,
        "index": 417,
        "text": "Biển nào báo hiệu gần đến đoạn đường thường có trẻ em đi ngang qua?",
        "tip": "Biển 1: W.224 \"Đường người đi bộ cắt ngang\"; Biển 2: W.225 \"Trẻ em\"; Biển 3: W.226 \"Đường người đi xe đạp cắt ngang\".",
        "answers": [
            "Biển 1.",
            "Biển 2.",
            "Biển 3.",
            "Cả 3 biển.",
        ],
        "correct":""
    },
    {
        "image": "q418.png",
        "no": 418,
        "index": 418,
        "text": "Gặp biển nào dưới đây người tham gia giao thông cần phải điều chỉnh tốc độ xe chạy cho thích hợp, đề phòng gió thổi mạnh gây lật xe?",
        "tip": "Biển 1: W.232 \"Gió ngang\"; Biển 2: W201c \"Chỗ ngoặt nguy hiểm có nguy cơ lật xe\".",
        "answers": [
            "Biển 1.",
            "Biển 2.",
            "Cả hai biển.",
        ],
        "correct":""
    },
    {
        "image": "q419.png",
        "no": 419,
        "index": 419,
        "text": "Biển nào sau đây là biển \"Dốc xuống nguy hiểm\"?",
        "tip": "Biển 1: W.219 \"Dốc xuống nguy hiểm\"; Biển 2: W.220 \"Dốc lên nguy hiểm\".",
        "answers": [
            "Biển 1.",
            "Biển 2.",
        ],
        "correct":""
    },
    {
        "image": "q420.png",
        "no": 420,
        "index": 420,
        "text": "Biển nào sau đây là biển \"Dốc lên nguy hiểm\"?",
        "tip": "Biển 1: W.219 \"Dốc xuống nguy hiểm\"; Biển 2: W.220 \"Dốc lên nguy hiểm\".",
        "answers": [
            "Biển 1.",
            "Biển 2.",
        ],
        "correct":""
    },
    {
        "image": "q421.png",
        "no": 421,
        "index": 421,
        "text": "Biển báo này có ý nghĩa gì?",
        "tip": "Biển W201c \"Chỗ ngoặt nguy hiểm có nguy cơ lật xe bên phải khi đường cong vòng sang trái\".",
        "answers": [
            "Chỗ ngoặt nguy hiểm có nguy cơ lật xe bên phải khi đường cong vòng sang trái.",
            "Chỗ ngoặt nguy hiểm có nguy cơ lật xe bên trái khi đường cong vòng bên phải.",
        ],
        "correct":""
    },
    {
        "image": "q422.png",
        "no": 422,
        "index": 422,
        "text": "Biển báo này có ý nghĩa gì?",
        "tip": "Biển W.217 \"Bến phà\".",
        "answers": [
            "Báo trước đoạn đường có gió ngang.",
            "Báo trước đoạn đường trơn trượt.",
            "Báo trước sắp đến bến phà.",
        ],
        "correct":""
    },
    {
        "image": "q423.png",
        "no": 423,
        "index": 423,
        "text": "Biển báo này có ý nghĩa gì?",
        "tip": "Biển W.221a \"Đường ổ gà, sống trâu\".",
        "answers": [
            "Báo hiệu đường có ổ gà, lồi lõm.",
            "Báo hiệu đường có gờ giảm tốc phía trước.",
        ],
        "correct":""
    },
    {
        "image": "q424.png",
        "no": 424,
        "index": 424,
        "text": "Biển báo này có ý nghĩa gì?",
        "tip": "Biển W221b \"Đường có sóng mấp mô nhân tạo\".",
        "answers": [
            "Báo hiệu đường có ổ gà, lồi lõm.",
            "Báo hiệu đường có gờ giảm tốc phía trước.",
        ],
        "correct":""
    },
    {
        "image": "q425.png",
        "no": 425,
        "index": 425,
        "text": "Biển báo này có ý nghĩa gì?",
        "tip": "Biển W.228d \"Nền đường yếu\".",
        "answers": [
            "Để báo trước gần tới đoạn đường có hiện tượng đất đá từ trên ta luy dương sạt lở bất ngờ gây nguy hiểm cho xe cộ và người đi đường.",
            "Để báo trước nơi có kết cấu mặt đường rời rạc, khi phương tiện đi qua, làm cho các viên đá, sỏi băng lên gây nguy hiểm và mất an toàn cho người và phương tiện tham gia giao thông.",
            "Để cảnh báo những đoạn nền đường yếu, đoạn đường đang theo dõi lún mà việc vận hành xe ở tốc độ cao có thể gây nguy hiểm.",
        ],
        "correct":""
    },
    {
        "image": "q426.png",
        "no": 426,
        "index": 426,
        "text": "Các biển báo này có ý nghĩa gì?",
        "tip": "Biển số W.228 (a, b) \"Đá lở\".",
        "answers": [
            "Để báo trước gần tới đoạn đường có hiện tượng đất đá từ trên ta luy dương sạt lở bất ngờ gây nguy hiểm cho xe cộ và người đi đường.",
            "Để báo trước nơi có kết cấu mặt đường rời rạc, khi phương tiện đi qua, làm cho các viên đá, sỏi văng lên gây nguy hiểm và mất an toàn cho người và phương tiện tham gia giao thông.",
            "Để cảnh báo những đoạn nền đường yếu, đoạn đường đang theo dõi lún mà việc vận hành xe ở tốc độ cao có thể gây nguy hiểm.",
        ],
        "correct":""
    },
    {
        "image": "q427.png",
        "no": 427,
        "index": 427,
        "text": "Biển báo này có ý nghĩa gì?",
        "tip": "Biển số W.228c \"Sỏi đá bắn lên\".",
        "answers": [
            "Để báo trước gần tới đoạn đường có hiện tượng đất đá từ trên ta luy dương sạt lở bất ngờ gây nguy hiểm cho xe cộ và người đi đường.",
            "Để báo trước nơi có kết cấu mặt đường rời rạc, khi phương tiện đi qua, làm cho các viên đá, sỏi băng lên gây nguy hiểm và mất an toàn cho người và phương tiện tham gia giao thông.",
            "Để cảnh báo những đoạn nền đường yếu, đoạn đường đang theo dõi lún mà việc vận hành xe ở tốc độ cao có thể gây nguy hiểm.",
        ],
        "correct":""
    },
    {
        "image": "q428.png",
        "no": 428,
        "index": 428,
        "text": "Gặp biển báo này người lái xe phải xử lý thế nào?",
        "tip": "Biển số W.230 \"Gia súc\".",
        "answers": [
            "Đi chậm, quan sát và dừng lại nếu gặp gia súc trên đường.",
            "Bấm còi to để gia súc tránh đường và nhanh chóng di chuyển qua đoạn đường có gia súc.",
        ],
        "correct":""
    },
    {
        "image": "q429.png",
        "no": 429,
        "index": 429,
        "text": "Biển báo này có ý nghĩa gì?",
        "tip": "Biển số W.239a \"Đường cáp điện ở phía trên\".",
        "answers": [
            "Báo hiệu khu vực nguy hiểm thường xuyên có sét đánh.",
            "Báo hiệu khu vực có đường dây điện cắt ngang phía trên tuyến đường.",
        ],
        "correct":""
    },
    {
        "image": "q430.png",
        "no": 430,
        "index": 430,
        "text": "Biển nào báo hiệu các phương tiện phải đi đúng làn đường quy định và tuân thủ tốc độ tối đa cho phép?",
        "tip": "Biển 1: P.127b \"Biển ghép tốc độ tối đa cho phép trên từng làn đường\";\nBiển 2: P.127c \"Biển ghép tốc độ tối đa cho phép theo phương tiện, trên từng làn đường\".\nBiển 2 là đáp án đúng.",
        "answers": [
            "Biển 1",
            "Biển 2.",
            "Cả hai biển.",
        ],
        "correct":""
    },
    {
        "image": "q431.png",
        "no": 431,
        "index": 431,
        "text": "Biển nào báo hiệu các phương tiện phải tuân thủ tốc độ tối đa cho phép trên từng làn đường?",
        "tip": "Biển 1: P.127b \"Biển ghép tốc độ tối đa cho phép trên từng làn đường\";\nBiển 2: P.127c \"Biển ghép tốc độ tối đa cho phép theo phương tiện, trên từng làn đường\".\nNên cả 2 biển đều là đáp án đúng (Quy định tốc độ tối đa theo làn đường).",
        "answers": [
            "Biển 1.",
            "Biển 2.",
            "Cả hai biển.",
        ],
        "correct":""
    },
    {
        "image": "q432.png",
        "no": 432,
        "index": 432,
        "text": "Biển nào báo hiệu \"Đường dành cho xe ô tô\"?",
        "tip": "Biển 1: R.403a \"Đường dành cho xe ôtô\";\nBiển 2: R.404a \"Hết đoạn đường dành cho xe ôtô\".",
        "answers": [
            "Biển 1.",
            "Biển 2.",
        ],
        "correct":""
    },
    {
        "image": "q433.png",
        "no": 433,
        "index": 433,
        "text": "Biển nào báo hiệu \"Hết đường dành cho xe ô tô\"?",
        "tip": "Biển 1: R.403a \"Đường dành cho xe ôtô\";\nBiển 2: R.404a \"Hết đoạn đường dành cho xe ôtô\".",
        "answers": [
            "Biển 1.",
            "Biển 2.",
        ],
        "correct":""
    },
    {
        "image": "q434.png",
        "no": 434,
        "index": 434,
        "text": "Khi gặp biển nào thì các phương tiện không được đi vào, trừ ô tô và mô tô?",
        "tip": "Biển 1: R.403b \"Đường dành cho xe ôtô, xe máy\";\nBiển 2: R.404b \"Hết đoạn đường dành cho xe ôtô, xe máy\".",
        "answers": [
            "Biển 1.",
            "Biển 2.",
        ],
        "correct":""
    },
    {
        "image": "q435.png",
        "no": 435,
        "index": 435,
        "text": "Biển này có ý nghĩa gì?",
        "tip": "Biển số R.411 \"Hướng đi trên mỗi làn đường phải theo\".",
        "answers": [
            "Chỉ hướng đi phải theo.",
            "Biển báo hiệu cho người lái xe biết số lượng làn đường trên mặt đường và hướng đi trên mỗi làn đường phai theo.",
            "Chỉ hướng đường phải theo.",
        ],
        "correct":""
    },
    {
        "image": "q436.png",
        "no": 436,
        "index": 436,
        "text": "Biển nào (đặt trước ngã ba, ngã tư) cho phép xe được rẽ sang hướng khác?",
        "tip": "Biển 1: R.301a \"Hướng đi phải theo\" chỉ được đi thẳng đặt trước ngã ba, ngã tư;\nBiển 2: R.301h \"Hướng đi phải theo\" chỉ được rẽ trái hoặc rẽ phải đặt sau ngã ba, ngã tư;\nNên đáp án đúng là không có biển nào.",
        "answers": [
            "Biển 1.",
            "Biển 2.",
            "Không biển nào",
        ],
        "correct":""
    },
    {
        "image": "q437.png",
        "no": 437,
        "index": 437,
        "text": "Biển nào báo hiệu \"Hướng đi thẳng phải theo\"?",
        "tip": "Biển 1: R.301a \"Hướng đi phải theo\" chỉ được đi thẳng đặt trước ngã ba, ngã tư;\nBiển 2: I.407a \"Đường một chiều\" không liên quan hướng đi phải theo.\nNên Biển 1 là đáp án đúng.",
        "answers": [
            "Biển 1.",
            "Biển 2.",
        ],
        "correct":""
    },
    {
        "image": "q438.png",
        "no": 438,
        "index": 438,
        "text": "Biển nào báo hiệu \"Đường một chiều\"?",
        "tip": "Biển 1: R.301a \"Hướng đi phải theo\" chỉ được đi thẳng đặt trước ngã ba, ngã tư;\nBiển 2: I.407a \"Đường một chiều\";\nNên Biển 2 là đáp án đúng.",
        "answers": [
            "Biển 1.",
            "Biển 2.",
            "Cả hai biển.",
        ],
        "correct":""
    },
    {
        "image": "q439.png",
        "no": 439,
        "index": 439,
        "text": "Trong các biển dưới đây biển nào là biển \"Hết tốc độ tối đa cho phép\"?",
        "tip": "Biển 1: DP134 \"Hết hạn chế tốc độ tối đa\"; Biển 2: DP135 \"Hết mọi lệnh cấm\"; Biển 3: R307 \"Hết hạn chế tốc độ tối thiểu\". Nên Biển 1 là biển \"Hết hạn chế tốc độ tối đa\".\nChú ý câu này hỏi ý nghĩa của biển.",
        "answers": [
            "Biển 1.",
            "Biển 2.",
            "Biển 3",
            "Cả ba biển.",
        ],
        "correct":""
    },
    {
        "image": "q440.png",
        "no": 440,
        "index": 440,
        "text": "Hiệu lực của biển \"Tốc độ tối đa cho phép\" hết tác dụng khi gặp biển nào dưới đây?",
        "tip": "Biển 1: DP134 \"Hết hạn chế tốc độ tối đa\"; Biển 2: DP135 \"Hết mọi lệnh cấm\"; Biển 3: R307 \"Hết hạn chế tốc độ tối thiểu\". Nên Biển 1 và Biển 2 là đều hết hạn chế tốc độ tối đa.\nChú ý câu hỏi các biển hết hạn chế, không phải ý nghĩa của biển.",
        "answers": [
            "Biển 1.",
            "Biển 2.",
            "Biển 3.",
            "Biển 1 và 2.",
        ],
        "correct":""
    },
    {
        "image": "q441.png",
        "no": 441,
        "index": 441,
        "text": "Trong các biển dưới đây biển nào là biển \"Hết tốc độ tối thiểu\"?",
        "tip": "Biển 1: DP134 \"Hết hạn chế tốc độ tối đa\"; Biển 2: DP135 \"Hết mọi lệnh cấm\"; Biển 3: R307 \"Hết hạn chế tốc độ tối thiểu\". Nên Biển 3 là biển \"Hết hạn chế tốc độ tối thiểu\".\nChú ý câu này hỏi ý nghĩa của biển.",
        "answers": [
            "Biển 1.",
            "Biển 2.",
            "Biển 3.",
            "Cả ba biển",
        ],
        "correct":""
    },
    {
        "image": "q442.png",
        "no": 442,
        "index": 442,
        "text": "Biển nào dưới đây báo hiệu hết cấm vượt?",
        "tip": "Biển 1: DP.134 \"Hết hạn chế tốc độ tối đa\"; Biển 2: DP.135 \"Hết tất cả các lệnh cấm\"; Biển 3: DP.133 \"Hết cấm vượt\";\nNên đáp án đúng phải là Biển 2 và Biển 3.",
        "answers": [
            "Biển 1.",
            "Biển 2.",
            "Biển 3.",
            "Biển 2 và 3.",
        ],
        "correct":""
    },
    {
        "image": "q443.png",
        "no": 443,
        "index": 443,
        "text": "Trong các biển dưới đây biển nào là biển \"Hết mọi lệnh cấm\"?",
        "tip": "Biển 1: DP.134 \"Hết hạn chế tốc độ tối đa\"; Biển 2: DP.135 \"Hết tất cả các lệnh cấm\"; Biển 3: R.307 \"Hết hạn chế tốc độ tối thiểu\".",
        "answers": [
            "Biển 1.",
            "Biển 2.",
            "Biển 3.",
            "Cả ba biển",
        ],
        "correct":""
    },
    {
        "image": "q444.png",
        "no": 444,
        "index": 444,
        "text": "Biển nào cho phép được quay đầu xe đi theo hướng ngược lại khi đặt biển trước ngã ba, ngã tư?",
        "tip": "R.301 (a,b,c,d,e,f,g,h) \"Hướng đi phải theo\";\nBiển 1: R.301e được đặt ở trước nơi đường giao nhau, chỉ được rẽ trái ở phạm vi nơi đường giao nhau đằng sau mặt biển.\nBiển 2: R.301h đặt sau ngã ba, ngã tư, chỉ được phép rẽ trái, quay đầu hoặc rẽ phải ở khu vực ngã ba, ngã tư trước mặt biển.\nBiển 3: R.301g được đặt ở trước nơi đường giao nhau, chỉ được phép đi thẳng, rẽ trái hoặc quay đầu xe để đi theo hướng ngược lại.\nBiển 3 là đáp án đúng.",
        "answers": [
            "Biển 1.",
            "Biển 2.",
            "Biển 3.",
            "Không biển nào.",
        ],
        "correct":""
    },
    {
        "image": "q445.png",
        "no": 445,
        "index": 445,
        "text": "Biển nào không cho phép rẽ phải?",
        "tip": "R.301 (a,b,c,d,e,f,g,h) \"Hướng đi phải theo\";\nBiển 1: R.301e được đặt ở trước nơi đường giao nhau, chỉ được rẽ trái ở phạm vi nơi đường giao nhau đằng sau mặt biển.\nBiển 2: R.301h đặt sau ngã ba, ngã tư, chỉ được phép rẽ trái, quay đầu hoặc rẽ phải ở khu vực ngã ba, ngã tư trước mặt biển.\nBiển 3: R.301f được đặt ở trước nơi đường giao nhau, chỉ được phép đi thẳng hay rẽ phải ở phạm vi nơi đường giao nhau đằng sau mặt biển.\nBiển 1 không cho phép rẽ phải là đáp án đúng.",
        "answers": [
            "Biển 1.",
            "Biển 2.",
            "Biển 3.",
            "Biển 1 và 3.",
        ],
        "correct":""
    },
    {
        "image": "q446.png",
        "no": 446,
        "index": 446,
        "text": "Khi đến chỗ giao nhau, gặp biển nào thì người lái xe không được cho xe đi thẳng, phải rẽ sang hướng khác?",
        "tip": "R.301 (a,b,c,d,e,f,g,h) \"Hướng đi phải theo\";\nBiển 1: R.301e được đặt ở trước nơi đường giao nhau, chỉ được rẽ trái ở phạm vi nơi đường giao nhau đằng sau mặt biển.\nBiển 2: R.301h đặt sau ngã ba, ngã tư, chỉ được phép rẽ trái, quay đầu hoặc rẽ phải ở khu vực ngã ba, ngã tư trước mặt biển.\nBiển 3: R.301f được đặt ở trước nơi đường giao nhau, chỉ được phép đi thẳng hay rẽ phải ở phạm vi nơi đường giao nhau đằng sau mặt biển.\nBiển 1 và Biển 2 là đáp án đúng.",
        "answers": [
            "Biển 1 và 2.",
            "Biển 1 và 3.",
            "Biển 2 và 3.",
            "Cả ba biển.",
        ],
        "correct":""
    },
    {
        "image": "q447.png",
        "no": 447,
        "index": 447,
        "text": "Biển nào cho phép quay đầu xe?",
        "tip": "Biển 1: I.409 \"Chỗ quay xe\" và Biển 2: I.410 \"Khu vực quay xe\" nên cả 2 biển đều cho phép quay đầu xe.",
        "answers": [
            "Biển 1",
            "Biển 2",
            "Cả 2 biển",
        ],
        "correct":""
    },
    {
        "image": "q448.png",
        "no": 448,
        "index": 448,
        "text": "Biển nào chỉ dẫn tên đường trên các tuyến đường đối ngoại?",
        "tip": "Biển 1: R.E,9a \"Cấm đỗ xe trong khu vực\";\nBiển 2: R.E,9b \"Cấm đỗ xe theo giờ trong khu vực\".\nBiển 3: I.449  \"Biển tên đường\".",
        "answers": [
            "Biển 1.",
            "Biển 2.",
            "Biển 3.",
            "Biển 1 và 2.",
        ],
        "correct":""
    },
    {
        "image": "q449.png",
        "no": 449,
        "index": 449,
        "text": "Biển 1 có ý nghĩa gì?",
        "tip": "Biển 1: R.E,10b \"Hết cấm đỗ xe theo giờ trong khu vực\";\nBiển 2: R.E,10a \"Hết cấm đỗ xe trong khu vực\";\nBiển 3: R.E,10c: \"Hết khu vực đỗ xe\".",
        "answers": [
            "Biển chỉ dẫn hết cấm đỗ xe theo giờ trong khu vực.",
            "Biển chỉ dẫn hết hiệu lực khu vực đỗ xe trên các tuyến đường đối ngoại.",
            "Biển chỉ dẫn khu vực đỗ xe trên các tuyến đường đối ngoại.",
        ],
        "correct":""
    },
    {
        "image": "q450.png",
        "no": 450,
        "index": 450,
        "text": "Biển 3 có ý nghĩa gì?",
        "tip": "Biển 1: R.E,9a \"Cấm đỗ xe trong khu vực\"; Biển 2: Biển R.E,10c \"Hết khu vực đỗ xe\"; Biển 3: Biển R.E,9d \"Hạn chế tốc độ tối đa trong khu vực\".",
        "answers": [
            "Biển chỉ dẫn khu vực cấm đỗ xe trên các tuyến đường đối ngoại",
            "Biển chỉ dẫn khu vực đỗ xe trên các tuyến đường đối ngoại.",
            "Biển hạn chế tốc độ tối đa trong khu vực.",
            "Biển chỉ dẫn hết hiệu lực khu vực cấm đỗ xe theo giờ trên các tuyến đường đối ngoại.",
        ],
        "correct":""
    },
    {
        "image": "q451.png",
        "no": 451,
        "index": 451,
        "text": "Biển nào báo hiệu \"Đường phía trước có làn đường dành cho ô tô khách\"?",
        "tip": "Biển 1: R.412f \"Làn đường dành cho xe ôtô\";\nBiển 2: I.413a \"Đường phía trước có làn đường dành cho ô tô khách\";\nBiển 3 I.413c \"Rẽ ra đường có làn đường dành cho ô tô khách\".",
        "answers": [
            "Biển 1.",
            "Biển 2.",
            "Biển 3.",
        ],
        "correct":""
    },
    {
        "image": "q452.png",
        "no": 452,
        "index": 452,
        "text": "Biển nào báo hiệu \"Rẽ ra đường có làn đường dành cho ô tô khách\"?",
        "tip": "Biển 1: R.412f \"Làn đường dành cho xe ôtô\";\nBiển 2: I.413a \"Đường phía trước có làn đường dành cho ô tô khách\";\nBiển 3 I.413c \"Rẽ ra đường có làn đường dành cho ô tô khách\".",
        "answers": [
            "Biển 1.",
            "Biển 2.",
            "Biển 3.",
        ],
        "correct":""
    },
    {
        "image": "q453.png",
        "no": 453,
        "index": 453,
        "text": "Biển nào đặt trên đường chính trước khi đến nơi đường giao nhau để rẽ vào đường cụt?",
        "tip": "Biển số I.405(a,b,c) \"Đường cụt\". Biển 1 và 2: Biển số I.405 (a,b) để chỉ lối rẽ vào đường cụt; Biển 3: Biển số I.405c để chỉ dẫn phía trước là đường cụt.",
        "answers": [
            "Biển 1 và 2.",
            "Cả ba biển.",
            "Không biển nào.",
        ],
        "correct":""
    },
    {
        "image": "q454.png",
        "no": 454,
        "index": 454,
        "text": "Biển nào chỉ dẫn cho người đi bộ sử dụng cầu vượt qua đường?",
        "tip": "Biển 1: I424a \"Cầu vượt qua đường cho người đi bộ\"; Biển 2: I424c \"Hầm chui qua đường cho người đi bộ\" nên đáp án đúng là biển 1.",
        "answers": [
            "Biển 1.",
            "Biển 2.",
            "Cả hai biển.",
            "Không biển nào.",
        ],
        "correct":""
    },
    {
        "image": "q455.png",
        "no": 455,
        "index": 455,
        "text": "Biển nào chỉ dẫn cho người đi bộ sử dụng hầm chui qua đường?",
        "tip": "Biển 1: I424b \"Cầu vượt qua đường cho người đi bộ\"; Biển 2: I424d \"Hầm chui qua đường cho người đi bộ\" nên đáp án đúng là biển 2.",
        "answers": [
            "Biển 1.",
            "Biển 2.",
            "Cả hai biển.",
            "Không biển nào.",
        ],
        "correct":""
    },
    {
        "image": "q456.png",
        "no": 456,
        "index": 456,
        "text": "Biển nào báo hiệu nơi đỗ xe cho người tàn tật",
        "tip": "Biển 1: R.304 \"Đường dành cho xe thô sơ\";\nBiển 2: I.446 \"Nơi đỗ xe dành cho người khuyết tật\";\nBiển 3: R.305 \"Đường dành cho người đi bộ\".",
        "answers": [
            "Biển 1.",
            "Biển 2.",
            "Biển 3.",
        ],
        "correct":""
    },
    {
        "image": "q457.png",
        "no": 457,
        "index": 457,
        "text": "Gặp biển báo này, người lái xe phải đỗ xe như thế nào?",
        "tip": "Biển số 408a \"Nơi đỗ xe một phần trên hè phố\".",
        "answers": [
            "Đỗ xe hoàn toàn trên hè phố.",
            "Đỗ xe hoàn toàn dưới lòng đường.",
            "Đỗ ½ thân xe trở lên trên hè phố.",
        ],
        "correct":""
    },
    {
        "image": "q458.png",
        "no": 458,
        "index": 458,
        "text": "Gặp biển báo này, người tham gia giao thông phải xử lý như thế nào?",
        "tip": "Biển I.436 \"Trạm cảnh sát giao thông\". Các phương tiện phải giảm tốc độ đến mức an toàn và không được vượt khi đi qua khu vực này.",
        "answers": [
            "Dừng xe tại khu vực có trạm Cảnh sát giao thông.",
            "Tiếp tục lưu thông với tốc độ bình thường.",
            "Phải giảm tốc độ đến mức an toàn và không được vượt khi đi qua khu vực này.",
        ],
        "correct":""
    },
    {
        "image": "q459.png",
        "no": 459,
        "index": 459,
        "text": "Gặp biển báo này người lái xe có bắt buộc phải chạy vòng theo đảo an toàn theo hướng mũi tên khi muốn chuyển hướng hay không?",
        "tip": "Biển số R.303 \"Nơi giao nhau chạy theo vòng xuyến\".",
        "answers": [
            "Bắt buộc",
            "Không bắt buộc.",
        ],
        "correct":""
    },
    {
        "image": "q460.png",
        "no": 460,
        "index": 460,
        "text": "Biển nào chỉ dẫn địa giới hành chính giữa các thành phố, tỉnh, huyện?",
        "tip": "Biển 1: I.414a \"Chỉ hướng đường\"; Biển 2: I.419a \"Chỉ dẫn địa giới\"; Biển 3: I.422 \"Di tích lịch sử\".",
        "answers": [
            "Biển 1.",
            "Biển 2.",
            "Biển 3.",
        ],
        "correct":""
    },
    {
        "image": "q461.png",
        "no": 461,
        "index": 461,
        "text": "Biển nào báo hiệu \"Cầu vượt liên thông\"?",
        "tip": "Biển 1: I.447d \"Cầu vượt liên thông\"; Biển 2: R.308b \"Tuyến đường cầu vượt cắt qua\"; Biển 3: I.447a \"Cầu vượt liên thông\";",
        "answers": [
            "Biển 2 và 3.",
            "Biển 1 và 2.",
            "Biển 1 và 3.",
            "Cả ba biển.",
        ],
        "correct":""
    },
    {
        "image": "q462.png",
        "no": 462,
        "index": 462,
        "text": "Biển số 1 có ý nghĩa gì?",
        "tip": "Biển 1: I.447d \"Cầu vượt liên thông\"; Biển 2, Biển 3: R.308 (a,b) \"Tuyến đường cầu vượt cắt qua\".",
        "answers": [
            "Đi thẳng hoặc rẽ trái trên cầu vượt.",
            "Đi thẳng hoặc rẽ phải trên cầu vượt.",
            "Báo hiệu cầu vượt liên thông.",
        ],
        "correct":""
    },
    {
        "image": "q463.png",
        "no": 463,
        "index": 463,
        "text": "Biển nào báo hiệu \"Tuyến đường cầu vượt cắt qua\"?",
        "tip": "Biển 1, Biển 2: R.308 (a,b) \"Tuyến đường cầu vượt cắt qua\"; Biển 3: W.237 \"Cầu vồng\".",
        "answers": [
            "Biển 1 và 2.",
            "Biển 1 và 3.",
            "Biển 2 và 3.",
        ],
        "correct":""
    },
    {
        "image": "q464.png",
        "no": 464,
        "index": 464,
        "text": "Biển báo dưới đây có ý nghĩa gì?",
        "tip": "Biển số I.448 \"Làn đường cứu nạn hay làn thoát xe khẩn cấp\".",
        "answers": [
            "Chỉ dẫn khoảng cách đến làn đường cứu nạn (làn thoát xe khẩn cấp).",
            "Báo hiệu đường cụt phía trước.",
            "Báo hiệu nút giao gần nhất phía trước",
            "Báo hiệu trạm dừng nghỉ phía trước.",
        ],
        "correct":""
    },
    {
        "image": "q465.png",
        "no": 465,
        "index": 465,
        "text": "Tại đoạn đường có biển \"Làn đường dành riêng cho từng loại xe\", các phương tiện có được phép chuyển sang làn khác để đi theo hành trình mong muốn khi đến gần nơi đường bộ giao nhau hay không?",
        "tip": "Biển số R.412 (a,b,c,d,e,f,g,h) \"Làn đường dành riêng cho từng loại xe hoặc nhóm xe\": Khi đến gần nơi đường bộ giao nhau, xe được phép chuyển làn để đi theo hành trình mong muốn. Việc chuyển làn phải thực hiện theo đúng các quy định.",
        "answers": [
            "Được phép chuyển sang làn khác",
            "Không được phép chuyển sang làn khác, chỉ được đi trong làn quy định theo biển",
        ],
        "correct":""
    },
    {
        "image": "q466.png",
        "no": 466,
        "index": 466,
        "text": "Tại đoạn đường có cắm biển dưới đây, xe tải và xe khách có được phép đi vào không?",
        "tip": "Biển số R.403a \"Đường dành cho ôtô\" nên xe tải và xe khách đi vào được.",
        "answers": [
            "Có.",
            "Không.",
        ],
        "correct":""
    },
    {
        "image": "q467.png",
        "no": 467,
        "index": 467,
        "text": "Tại đoạn đường có cắm biển dưới đây, xe tải và xe khách có được phép đi vào không?",
        "tip": "Biển số R.403d \"Đường dành cho ôtô con\" nên xe tải và xe khách KHÔNG được phép đi vào.",
        "answers": [
            "Có.",
            "Không.",
        ],
        "correct":""
    },
    {
        "image": "q468.png",
        "no": 468,
        "index": 468,
        "text": "Biển nào báo hiệu kết thúc đường cao tốc?",
        "tip": "Biển 1: I.402 \"Hết đoạn đường ưu tiên\"; Biển 2: IE.453b chỉ dẫn điểm kết thúc đường cao tốc; Biển 3: R.404a \"Hết đoạn đường dành cho xe ôtô\".",
        "answers": [
            "Biển 1.",
            "Biển 2.",
            "Biển 3.",
        ],
        "correct":""
    },
    {
        "image": "q469.png",
        "no": 469,
        "index": 469,
        "text": "Biển này có ý nghĩa gì?",
        "tip": "Biển IE.467b chỉ dẫn cho người điều kiển phương tiện giao thông biết trước sắp đến vị trí nhập làn xe.",
        "answers": [
            "Chỉ dẫn sắp đến vị trí nhập làn xe.",
            "Chỉ dẫn vị trí nhập làn xe cách 250 m.",
            "Chỉ dẫn vị trí nhập làn cách trạm thu phí 250 m.",
        ],
        "correct":""
    },
    {
        "image": "q470.png",
        "no": 470,
        "index": 470,
        "text": "Biển này có ý nghĩa gì?",
        "tip": "Biển số IE.452 chỉ dẫn bắt đầu đường cao tốc, bao gồm các thông tin về tên và ký hiệu đường cao tốc, giá trị hạn chế tốc độ tối đa và tốc độ tối thiểu.",
        "answers": [
            "Bắt đầu đường cao tốc.",
            "Chỉ dẫn địa giới đường cao tốc, chiều dài đường cao tốc.",
            "Tên và ký hiệu đường cao tốc, tốc độ tối đa và tối thiểu khi di chuyển trên cao tốc.",
            "Cả ý 1 và ý 3.",
        ],
        "correct":""
    },
    {
        "image": "q471.png",
        "no": 471,
        "index": 471,
        "text": "Ý nghĩa các biểu tượng ghi trên biển chỉ dẫn là gì?",
        "tip": "Biển số IE.456a thông báo khoảng cách đến trạm dừng nghỉ với 4 dịch vụ: xăng dầu, ăn uống, thông tin và sửa chữa xe.",
        "answers": [
            "Xăng dầu, ăn uống, thông tin, sửa chữa xe.",
            "Xăng dầu, ăn uống, nhà nghỉ, sửa chữa xe.",
            "Xăng dầu, ăn uống, cấp cứu, sửa chữa xe.",
        ],
        "correct":""
    },
    {
        "image": "q472.png",
        "no": 472,
        "index": 472,
        "text": "Biển này có ý nghĩa gì?",
        "tip": "Biển số IE.463a chỉ dẫn khoảng cách đến trạm kiểm tra tải trọng xe",
        "answers": [
            "Chỉ dẫn đến trạm kiểm tra tải trọng xe.",
            "Chỉ dẫn hướng rẽ vào nơi đặt trạm kiểm tra tải trọng xe.",
            "Chỉ dẫn khoảng cách đến trạm kiểm tra tải trọng xe cách 750 m.",
        ],
        "correct":""
    },
    {
        "image": "q473.png",
        "no": 473,
        "index": 473,
        "text": "Khi di chuyển trên đường cao tốc, gặp biển nào thì người lái xe đi theo hướng bên trái để tránh chướng ngại vật?",
        "tip": "Biển 1: IE.468a chỉ dẫn đi theo hướng bên trái;\nBiển 2: IE.468b chỉ dẫn đi được cả hai hướng;\nBiển 3: IE.468c chỉ dẫn đi theo hướng bên phải.",
        "answers": [
            "Biển 1.",
            "Biển 2.",
            "Biển 3.",
        ],
        "correct":""
    },
    {
        "image": "q474.png",
        "no": 474,
        "index": 474,
        "text": "Khi di chuyển trên đường cao tốc, gặp biển nào thì người lái xe đi theo hướng bên phải để tránh chướng ngại vật?",
        "tip": "Biển 1: IE.468a chỉ dẫn đi theo hướng bên trái;\nBiển 2: IE.468b chỉ dẫn đi được cả hai hướng;\nBiển 3: IE.468c chỉ dẫn đi theo hướng bên phải.",
        "answers": [
            "Biển 1.",
            "Biển 2.",
            "Biển 3.",
        ],
        "correct":""
    },
    {
        "image": "q475.png",
        "no": 475,
        "index": 475,
        "text": "Khi di chuyển trên đường cao tốc, gặp biển nào thì người lái xe đi được cả hai hướng (bên trái hoặc bên phải) để tránh chướng ngại vật?",
        "tip": "Biển 1: IE.468a chỉ dẫn đi theo hướng bên trái;\nBiển 2: IE.468b chỉ dẫn đi được cả hai hướng;\nBiển 3: IE.468c chỉ dẫn đi theo hướng bên phải.",
        "answers": [
            "Biển 1.",
            "Biển 2.",
            "Biển 3.",
        ],
        "correct":""
    },
    {
        "image": "q476.png",
        "no": 476,
        "index": 476,
        "text": "Khi di chuyển trên đường cao tốc, gặp biển nào người lái xe phải chú ý đổi hướng đi khi sắp vào đường cong nguy hiểm?",
        "tip": "Biển 1 và Biển 3: Biển số IE.469 (tiêu phản quang) chỉ dẫn hướng rẽ để nhắc người điều khiển phương tiện chuẩn bị đổi hướng đi khi sắp vào đường cong nguy hiểm;\nBiển 2: IE.468b chỉ dẫn đi được cả hai hướng.",
        "answers": [
            "Biển 1 và 2.",
            "Biển 1 và 3.",
            "Biển 2.",
            "Biển 3.",
        ],
        "correct":""
    },
    {
        "image": "q477.png",
        "no": 477,
        "index": 477,
        "text": "Vạch mũi tên chỉ hướng trên mặt đường nào dưới đây cho phép xe chỉ được đi thẳng và rẽ phải?",
        "tip": "Vạch 9.3: Vạch mũi tên chỉ hướng trên mặt đường chỉ hướng xe phải đi: Vạch 1 chỉ được rẽ phải; Vạch 2 đi thẳng và rẽ trái; Vạch 3 đi thẳng và rẽ phải;",
        "answers": [
            "Vạch 1.",
            "Vạch 2 và 3.",
            "Vạch 3.",
            "Vạch 1 và 2.",
        ],
        "correct":""
    },
    {
        "image": "q478.png",
        "no": 478,
        "index": 478,
        "text": "Vạch kẻ đường nào dưới đây là vạch phân chia các làn xe cùng chiều?",
        "tip": "Vạch 1: Phân chia các làn xe cùng chiều, cho phép lần làn đè vạch;\nVạch 2: Phân chia các làn xe cùng chiều, không cho phép lấn làn, không cho phép đè vạch;\n Vạch 3: Phân chia hai chiều xe chạy ngược chiều, xe không được lấn làn, không được đè lên vạch.",
        "answers": [
            "Vạch 1.",
            "Vạch 2.",
            "Vạch 3.",
            "Vạch 1 và 2.",
        ],
        "correct":""
    },
    {
        "image": "q479.png",
        "no": 479,
        "index": 479,
        "text": "Vạch kẻ đường nào dưới đây là vạch phân chia hai chiều xe chạy (vạch tim đường), xe không được lấn làn, không được đè lên vạch?",
        "tip": "Vạch 1: Phân chia các làn xe cùng chiều, cho phép lần làn đè vạch;\nVạch 2: Phân chia hai chiều xe chạy ngược chiều; xe không được lấn làn, không được đè lên vạch.\nVạch 3: Phân chia các làn xe cùng chiều, không cho phép lấn làn, không cho phép đè vạch;",
        "answers": [
            "Vạch 1.",
            "Vạch 2.",
            "Vạch 3.",
            "Cả 3 vạch.",
        ],
        "correct":""
    },
    {
        "image": "q480.png",
        "no": 480,
        "index": 480,
        "text": "Vạch kẻ đường nào dưới đây là vạch phân chia hai chiều xe chạy (vạch tim đường)?",
        "tip": "Vạch 1: Phân chia hai chiều xe chạy ngược chiều. Xe được phép cắt qua để sử dụng làn ngược chiều từ cả hai phía;\nVạch 2: Phân chia các làn xe cùng chiều, cho phép lần làn đè vạch;\nVạch 3: Phân chia hai chiều xe chạy ngược chiều; xe không được lấn làn, không được đè lên vạch.",
        "answers": [
            "Vạch 1.",
            "Vạch 2.",
            "Vạch 3.",
            "Vạch 1 và 3.",
        ],
        "correct":""
    },
    {
        "image": "q481.png",
        "no": 481,
        "index": 481,
        "text": "Các vạch dưới đây có tác dụng gì?",
        "tip": "Vạch 1: Phân chia hai chiều xe chạy ngược chiều, cho phép lấn làn, đè vạch ở cả 2 chiều;\nVạch 2: Phân chia hai chiều xe chạy ngược chiều; xe không được lấn làn, không được đè lên vạch;\nVạch 3: Phân chia hai chiều xe chạy ngược chiều có 4 làn xe cơ giới trở lên; xe không được lấn làn, không được đè lên vạch.",
        "answers": [
            "Phân chia hai chiều xe chạy ngược chiều nhau.",
            "Phân chia các làn xe chạy cùng chiều nhau.",
        ],
        "correct":""
    },
    {
        "image": "q482.png",
        "no": 482,
        "index": 482,
        "text": "Các vạch dưới đây có tác dụng gì?",
        "tip": "Vạch 1: Phân chia các làn xe cùng chiều, cho phép lần làn đè vạch;\nVạch 2: Phân chia các làn xe cùng chiều, không cho phép lấn làn, không cho phép đè vạch;",
        "answers": [
            "Phân chia hai chiều xe chạy ngược chiều nhau.",
            "Phân chia các làn xe chạy cùng chiều nhau.",
        ],
        "correct":""
    },
    {
        "image": "q483.png",
        "no": 483,
        "index": 483,
        "text": "Khi gặp vạch kẻ đường nào các xe được phép đè vạch?",
        "tip": "Vạch 1: Phân chia hai chiều xe chạy ngược chiều, cho phép lấn làn, đè vạch ở cả 2 chiều;\nVạch 2: Phân chia các làn xe cùng chiều, không cho phép lấn làn, không cho phép đè vạch;\nVạch 3: Phân chia các làn xe cùng chiều, cho phép lần làn đè vạch;",
        "answers": [
            "Vạch 1.",
            "Vạch 2.",
            "Vạch 3.",
            "Vạch 1 và vạch 3.",
        ],
        "correct":""
    },
    {
        "image": "q484.png",
        "no": 484,
        "index": 484,
        "text": "Vạch dưới đây có tác dụng gì?",
        "tip": "Vạch 7.8: Vạch xác định khoảng cách xe trên đường.",
        "answers": [
            "Để xác định làn đường.",
            "Báo hiệu người lái xe chỉ được phép đi thẳng.",
            "Dùng để xác định khoảng cách giữa các phương tiện trên đường.",
        ],
        "correct":""
    },
    {
        "image": "q485.png",
        "no": 485,
        "index": 485,
        "text": "Vạch dưới đây có ý nghĩa gì?",
        "tip": "Vạch 7.6: Vạch chỉ dẫn sắp đến chỗ có bố trí vạch đi bộ qua đường.",
        "answers": [
            "Báo cho người điều khiển không được dừng phương tiện trong phạm vi phần mặt đường có bố trí vạch để tránh ùn tắc giao thông.",
            "Báo hiệu sắp đến chỗ có bố trí vạch đi bộ qua đường.",
            "Dùng để xác định khoảng cách giữa các phương tiện trên đường.",
        ],
        "correct":""
    },
    {
        "image": "q486.png",
        "no": 486,
        "index": 486,
        "text": "Vạch dưới đây có ý nghĩa gì?",
        "tip": "Vạch 9.2: Vạch quy định vị trí dừng đỗ của phương tiện giao thông công cộng trên đường.",
        "answers": [
            "Vị trí dừng xe của các phương tiện vận tải hành khách công cộng.",
            "Báo cho người điều khiển được dừng phương tiện trong phạm vi phần mặt đường có bố trí vạch để tránh ùn tắc giao thông.",
            "Dùng để xác định vị trí giữa các phương tiện trên đường.",
        ],
        "correct":""
    },
    {
        "image": "q487.png",
        "no": 487,
        "index": 487,
        "text": "Thứ tự các xe đi như thế nào là đúng quy tắc giao thông?",
        "tip": "Thứ tự ưu tiên: Xe ưu tiên - Đường ưu tiên - Đường cùng cấp theo thứ tự bên phải trống - rẽ phải - đi thẳng - rẽ trái.\n1. Xe tải: Đường ưu tiên và đi thẳng;\n2. Mô tô: Đường ưu tiên và rẽ trái;\n3. Xe khách: Đường không ưu tiên, đi thẳng.\n4. Xe con: Đường không ưu tiên, rẽ trái.",
        "answers": [
            "Xe tải, xe khách, xe con, mô tô.",
            "Xe tải, mô tô, xe khách, xe con.",
            "Xe khách, xe tải, xe con, mô tô.",
            "Mô tô, xe khách, xe tải, xe con.",
        ],
        "correct":""
    },
    {
        "image": "q488.png",
        "no": 488,
        "index": 488,
        "text": "Thứ tự các xe đi như thế nào là đúng quy tắc giao thông?",
        "tip": "Thứ tự ưu tiên: Xe ưu tiên - Đường ưu tiên - Đường cùng cấp theo thứ tự bên phải trống - rẽ phải - đi thẳng - rẽ trái.\n1. Xe công an: Xe ưu tiên.\n2. Xe con: Đường ưu tiên.\n3. Xe tải: Đường không ưu tiên, đi thẳng.\n4. Xe khách: Đường không ưu tiên, rẽ trái.",
        "answers": [
            "Xe công an, xe con, xe tải, xe khách.",
            "Xe công an, xe khách, xe con, xe tải.",
            "Xe công an, xe tải, xe khách, xe con.",
            "Xe con, xe công an, xe tải, xe khách.",
        ],
        "correct":""
    },
    {
        "image": "q489.png",
        "no": 489,
        "index": 489,
        "text": "Theo hướng mũi tên, thứ tự các xe đi như thế nào là đúng quy tắc giao thông?",
        "tip": "Thứ tự ưu tiên: Xe ưu tiên - Đường ưu tiên - Đường cùng cấp theo thứ tự bên phải trống - rẽ phải - đi thẳng - rẽ trái.\n1. Xe công an: Xe ưu tiên; \n2. Xe tải: Đường ưu tiên;\n3. Xe khách: Đường không ưu tiên, bên phải trống;\n4. Xe con: Đường không ưu tiên, bên phải vướng xe khách nên phải nhường.",
        "answers": [
            "Xe tải, xe công an, xe khách, xe con.",
            "Xe công an, xe khách, xe con, xe tải.",
            "Xe công an, xe con, xe tải, xe khách.",
            "Xe công an, xe tải, xe khách, xe con.",
        ],
        "correct":""
    },
    {
        "image": "q490.png",
        "no": 490,
        "index": 490,
        "text": "Thứ tự các xe đi như thế nào là đúng quy tắc giao thông?",
        "tip": "Thứ tự ưu tiên: Xe ưu tiên - Đường ưu tiên - Đường cùng cấp theo thứ tự bên phải trống - rẽ phải - đi thẳng - rẽ trái.\n1. Xe mô tô: Bên phải trống;\n2. Xe con: Đi thẳng;\n3. Xe tải: Rẽ trái;",
        "answers": [
            "Xe tải, xe con, mô tô.",
            "Xe con, xe tải, mô tô.",
            "Mô tô, xe con, xe tải.",
            "Xe con, mô tô, xe tải.",
        ],
        "correct":""
    },
    {
        "image": "q491.png",
        "no": 491,
        "index": 491,
        "text": "Xe nào phải nhường đường trong trường hợp này?",
        "tip": "Giao nhau cùng cấp có vòng xuyến: Chưa vào vòng xuyến thì ưu tiên xe bên phải; đã vào vòng xuyến ưu tiên xe từ bên trái tới.\nXe con nhường vì thấy xe tải từ bên trái tới đã nằm trong vòng xuyến.",
        "answers": [
            "Xe con.",
            "Xe tải.",
        ],
        "correct":""
    },
    {
        "image": "q492.png",
        "no": 492,
        "index": 492,
        "text": "Trường hợp này xe nào được quyền đi trước?",
        "tip": "Xe con được đi trước vì mô tô có biển STOP trước mặt.",
        "answers": [
            "Mô tô.",
            "Xe con.",
        ],
        "correct":""
    },
    {
        "image": "q493.png",
        "no": 493,
        "index": 493,
        "text": "Thứ tự các xe đi như thế nào là đúng quy tắc giao thông?",
        "tip": "Thứ tự ưu tiên: Xe vào ngã ba, ngã tư trước - Xe ưu tiên - Đường ưu tiên - Đường cùng cấp theo thứ tự bên phải trống - rẽ phải - đi thẳng - rẽ trái..\n1. Xe con (A): Đã vào ngã tư trước;\n2. Xe cứu thương: Xe ưu tiên;\n3. Xe con (B);",
        "answers": [
            "Xe con (A), xe cứu thương, xe con (B).",
            "Xe cứu thương, xe con (B), xe con (A).",
            "Xe con (B), xe con (A), xe cứu thương.",
        ],
        "correct":""
    },
    {
        "image": "q494.png",
        "no": 494,
        "index": 494,
        "text": "Thứ tự các xe đi như thế nào là đúng quy tắc giao thông?",
        "tip": "Thứ tự xe ưu tiên: Xe cứu hoả (mức độ thương vong lớn hơn); Xe công an; Xe cứu thương.",
        "answers": [
            "Xe cứu thương, xe cứu hỏa, xe con.",
            "Xe cứu hỏa, xe cứu thương, xe con.",
            "Xe cứu thương, xe con, xe cứu hỏa.",
        ],
        "correct":""
    },
    {
        "image": "q495.png",
        "no": 495,
        "index": 495,
        "text": "Xe nào được quyền đi trước trong trường hợp này?",
        "tip": "Xe ưu tiên đi trước.",
        "answers": [
            "Mô tô.",
            "Xe cứu thương.",
        ],
        "correct":""
    },
    {
        "image": "q496.png",
        "no": 496,
        "index": 496,
        "text": "Xe nào phải nhường đường đi cuối cùng qua nơi giao nhau này?",
        "tip": "Thứ tự ưu tiên: Xe ưu tiên - Đường ưu tiên - Đường cùng cấp theo thứ tự bên phải trống - rẽ phải - đi thẳng - rẽ trái.\n1. Xe con: Đường ưu tiên;\n2. Xe tải: Đường không ưu tiên, rẽ phải;\n3. Xe khách: Đường không ưu tiên, rẽ trái (Đáp án đúng).",
        "answers": [
            "Xe khách.",
            "Xe tải.",
            "Xe con.",
        ],
        "correct":""
    },
    {
        "image": "q497.png",
        "no": 497,
        "index": 497,
        "text": "Xe nào phải nhường đường là đúng quy tắc giao thông?",
        "tip": "Thứ tự ưu tiên: Xe ưu tiên - Đường ưu tiên - Đường cùng cấp theo thứ tự bên phải trống - rẽ phải - đi thẳng - rẽ trái.\nXe tải bên phải trống nên đi trước;\nĐáp án đúng là Xe con phải nhường đường: Bên phải vướng xe tải.",
        "answers": [
            "Xe con.",
            "Xe tải.",
        ],
        "correct":""
    },
    {
        "image": "q498.png",
        "no": 498,
        "index": 498,
        "text": "Xe nào được quyền đi trước trong trường hợp này?",
        "tip": "Xe ưu tiên theo mức độ thiệt hại: Xe chữa cháy ưu tiên hơn.",
        "answers": [
            "Xe công an.",
            "Xe chữa cháy.",
        ],
        "correct":""
    },
    {
        "image": "q499.png",
        "no": 499,
        "index": 499,
        "text": "Theo tín hiệu đèn, xe nào được phép đi?",
        "tip": "Xe con và xe khách đang ở làn đường có tín hiệu đèn xanh nên được phép đi.",
        "answers": [
            "Xe con và xe khách.",
            "Mô tô.",
        ],
        "correct":""
    },
    {
        "image": "q500.png",
        "no": 500,
        "index": 500,
        "text": "Theo tín hiệu đèn, xe nào được quyền đi là đúng quy tắc giao thông?",
        "tip": "Xe con và xe tải đang ở trên làn đường có tín hiệu đèn xanh nên được phép đi.",
        "answers": [
            "Xe khách, mô tô.",
            "Xe con, xe tải.",
            "Xe tải, mô tô.",
        ],
        "correct":""
    },
    {
        "image": "q501.png",
        "no": 501,
        "index": 501,
        "text": "Trong trường hợp này xe nào được quyền đi trước?",
        "tip": "Xe ưu tiên cùng cấp nên áp dụng thứ tự đường cùng cấp: Bên phải trống - Rẽ phải - Đi thẳng - Rẽ trái.\nXe quân sự được ưu tiên trước do bên phải trống.",
        "answers": [
            "Xe công an.",
            "Xe quân sự.",
        ],
        "correct":""
    },
    {
        "image": "q502.png",
        "no": 502,
        "index": 502,
        "text": "Theo tín hiệu đèn, xe tải đi theo hướng nào là đúng quy tắc giao thông?",
        "tip": "Hướng 1 rẽ phải có tín hiệu đèn xanh nên được phép đi. Hướng đi thẳng đang có tín hiệu đèn đỏ do đó các hướng 2,3,4 không thể đi được. Câu trả lời đúng là chỉ có hướng 1.",
        "answers": [
            "Hướng 2, 3, 4.",
            "Chỉ hướng 1.",
            "Hướng 1 và 2.",
            "Hướng 3 và 4.",
        ],
        "correct":""
    },
    {
        "image": "q503.png",
        "no": 503,
        "index": 503,
        "text": "Các xe đi theo hướng mũi tên, xe nào vi phạm quy tắc giao thông?",
        "tip": "1. Xe khách: Sai làn, Đi thẳng đèn đang đỏ;\n2. Xe tải: Sai làn: Đi trên làn đi thẳng trong khi thực hiện rẽ trái.\n3. Xe mô tô: Sai làn: Đi trên làn rẽ trái trong khi thực hiện rẽ phải,\nNên đáp án đúng là xe khách, xe tải và xe mô tô đều vi phạm quy tắc giao thông.",
        "answers": [
            "Xe khách, xe tải, mô tô.",
            "Xe tải, xe con, mô tô.",
            "Xe khách, xe con, mô tô.",
        ],
        "correct":""
    },
    {
        "image": "q504.png",
        "no": 504,
        "index": 504,
        "text": "Thứ tự các xe đi như thế nào là đúng quy tắc giao thông?",
        "tip": "Giao nhau cùng cấp có vòng xuyến: Chưa vào vòng xuyến thì ưu tiên xe bên phải; đã vào vòng xuyến ưu tiên xe từ bên trái tới.\nToàn bộ các xe chưa vào phòng xuyến nên ưu tiên xe bên phải.\nThứ tự sẽ là Mô tô, xe tải, xe khách, xe con.",
        "answers": [
            "Xe khách, xe tải, mô tô, xe con.",
            "Xe con, xe khách, xe tải, mô tô.",
            "Mô tô, xe tải, xe khách, xe con.",
            "Mô tô, xe tải, xe con, xe khách.",
        ],
        "correct":""
    },
    {
        "image": "q505.png",
        "no": 505,
        "index": 505,
        "text": "Trong trường hợp này xe nào đỗ vi phạm quy tắc giao thông?",
        "tip": "Biển cấm đỗ xe tải (ở biển phụ) nên chỉ có xe tải vi phạm.",
        "answers": [
            "Xe tải.",
            "Xe con và mô tô.",
            "Cả ba xe.",
            "Xe con và xe tải.",
        ],
        "correct":""
    },
    {
        "image": "q506.png",
        "no": 506,
        "index": 506,
        "text": "Xe nào được quyền đi trước?",
        "tip": "Thứ tự ưu tiên không vòng xuyến: Xe vào ngã ba, ngã tư trước - Xe ưu tiên - Đường ưu tiên - Đường cùng cấp theo thứ tự bên phải trống - rẽ phải - đi thẳng - rẽ trái.\nĐáp án đúng là Xe con (B): Đường ưu tiên;",
        "answers": [
            "Xe tải.",
            "Xe con (B).",
            "Xe con (A).",
        ],
        "correct":""
    },
    {
        "image": "q507.png",
        "no": 507,
        "index": 507,
        "text": "Theo hướng mũi tên, những hướng nào xe gắn máy đi được?",
        "tip": "Bạn lưu ý câu hỏi này hỏi về hướng đi của xe GẮN MÁY. Hướng 1 và 3 chắc chắn là đi được rồi.\nVới hướng 2, biển báo cấm mô tô đi vào chỉ có tác dụng với xe MÔ TÔ nên xe gắn máy không có hiệu lực. Do đó vẫn đi vào bình thường.",
        "answers": [
            "Cả ba hướng.",
            "Chỉ hướng 1 và 3.",
            "Chỉ hướng 1.",
        ],
        "correct":""
    },
    {
        "image": "q508.png",
        "no": 508,
        "index": 508,
        "text": "Xe nào đỗ vi phạm quy tắc giao thông?",
        "tip": "Biển cấm đỗ xe ở cả phía trước và phía sau biển (ở biển báo phụ) nên cả 2 xe vi phạm.",
        "answers": [
            "Cả hai xe.",
            "Không xe nào vi phạm.",
            "Chỉ xe mô tô vi phạm.",
            "Chỉ xe tải vi phạm.",
        ],
        "correct":""
    },
    {
        "image": "q509.png",
        "no": 509,
        "index": 509,
        "text": "Xe nào đỗ vi phạm quy tắc giao thông?",
        "tip": "Xe tải đậu trái đường; Xe con và mô tô đậu xe đè vạch nên cả 3 xe vi phạm.",
        "answers": [
            "Chỉ mô tô.",
            "Chỉ xe tải.",
            "Cả ba xe.",
            "Chỉ mô tô và xe tải.",
        ],
        "correct":""
    },
    {
        "image": "q510.png",
        "no": 510,
        "index": 510,
        "text": "Xe tải kéo mô tô ba bánh như hình này có đúng quy tắc giao thông không?",
        "tip": "Xe tải kéo xe mô tô 3 bánh như trên hình là không đúng vì đi vào đường có biển P.108 \"Cấm ô tô kéo moóc\" kể cả xe máy kéo, xe ô tô khách kéo theo rơ moóc đi qua.",
        "answers": [
            "Đúng.",
            "Không đúng.",
        ],
        "correct":""
    },
    {
        "image": "q511.png",
        "no": 511,
        "index": 511,
        "text": "Theo hướng mũi tên, hướng nào xe không được phép đi?",
        "tip": "Hướng 1 có biển cấm ô tô nên xe ô tô đương nhiên không được phép đi vào rồi.",
        "answers": [
            "Hướng 2 và 5.",
            "Chỉ hướng 1.",
        ],
        "correct":""
    },
    {
        "image": "q512.png",
        "no": 512,
        "index": 512,
        "text": "Theo hướng mũi tên, những hướng nào ô tô không được phép đi?",
        "tip": "Biển P.123a \"Cấm rẽ trái\" không cấm quay đầu xe nên chỉ có hướng 3 là hướng ô tô không được phép đi.",
        "answers": [
            "Hướng 1 và 2.",
            "Hướng 3.",
            "Hướng 1 và 4.",
            "Hướng 2 và 3.",
        ],
        "correct":""
    },
    {
        "image": "q513.png",
        "no": 513,
        "index": 513,
        "text": "Xe nào vượt đúng quy tắc giao thông?",
        "tip": "Biển số P.126 \"Cấm ô tô tải vượt\" nên không áp dụng với xe con và xe khách.",
        "answers": [
            "Cả 2 xe đều đúng.",
            "Xe con.",
            "Xe khách.",
        ],
        "correct":""
    },
    {
        "image": "q514.png",
        "no": 514,
        "index": 514,
        "text": "Theo hướng mũi tên, gặp biển hướng đi phải theo đặt trước ngã tư, những hướng nào xe được phép đi?",
        "tip": "Biển R.301g được đặt ở trước nơi đường giao nhau, chỉ được phép đi thẳng, rẽ trái hoặc quay đầu xe để đi theo hướng ngược lại.\nĐáp án đúng là hướng 2 và hướng 3.",
        "answers": [
            "Hướng 2 và 3.",
            "Hướng 1, 2 và 3.",
            "Hướng 1 và 3.",
        ],
        "correct":""
    },
    {
        "image": "q515.png",
        "no": 515,
        "index": 515,
        "text": "Xe kéo nhau như hình này có vi phạm quy tắc giao thông không?",
        "tip": "Xe kéo rơ moóc, xe kéo sơ mi rơ moóc đã kéo rơ moóc thì không được kéo thêm xe khác nên trường hợp này là vi phạm.",
        "answers": [
            "Không.",
            "Vi phạm.",
        ],
        "correct":""
    },
    {
        "image": "q516.png",
        "no": 516,
        "index": 516,
        "text": "Xe nào phải nhường đường trong trường hợp này?",
        "tip": "Phía trước xe tải có biển báo được ưu tiên qua đường hẹp nên được đi trước.\nHoặc phía trước xe khách có biển báo nhường cho xe ngược chiều qua đường hẹp.",
        "answers": [
            "Xe khách.",
            "Xe tải.",
        ],
        "correct":""
    },
    {
        "image": "q517.png",
        "no": 517,
        "index": 517,
        "text": "Xe nào được quyền đi trước trong trường hợp này?",
        "tip": "Cả 2 xe đều gặp đèn xanh nên áp dụng quy tắc đường cùng cấp: Bên phải trống - Rẽ phải - Đi thẳng - Rẽ trái.\nNên đáp án đúng là xe mô tô rẽ phải được quyền đi trước. Xe con rẽ trái phải nhường đường.",
        "answers": [
            "Xe con.",
            "Xe mô tô.",
        ],
        "correct":""
    },
    {
        "image": "q518.png",
        "no": 518,
        "index": 518,
        "text": "Xe kéo nhau trong trường hợp này đúng quy định không?",
        "tip": "Xe đầu kéo (xe container) đã kéo rơmoóc, sơmi rơmoóc không được phép kéo thêm rơmoóc hoặc xe khác, vật khác.",
        "answers": [
            "Không đúng.",
            "Đúng.",
        ],
        "correct":""
    },
    {
        "image": "q519.png",
        "no": 519,
        "index": 519,
        "text": "Theo hướng mũi tên, những hướng nào ô tô con được phép đi?",
        "tip": "Biển số R.301d \"Chỉ được rẽ phải\" chỉ áp dụng với xe tải (biển phụ) nên không áp dụng với xe con.\nHướng 2 cấm xe con không được đi vào, còn hướng 1, 3 và 4 xe con đều được phép đi.",
        "answers": [
            "Hướng 1.",
            "Hướng 1, 3 và 4.",
            "Hướng 2, 3 và 4.",
            "Cả bốn hướng.",
        ],
        "correct":""
    },
    {
        "image": "q520.png",
        "no": 520,
        "index": 520,
        "text": "Thứ tự các xe đi như thế nào là đúng quy tắc giao thông?",
        "tip": "Thứ tự ưu tiên đường cùng cấp: Xe ưu tiên - Đường ưu tiên - Bên phải trống - rẽ phải - đi thẳng - rẽ trái.\n1. Mô tô và xe đạp: Bên phải trống;\n2. Xe con (A): Đi thẳng;\n3. Xe con (B): Rẽ trái.",
        "answers": [
            "Xe con (A), mô tô, xe con (B), xe đạp.",
            "Xe con (B), xe đạp, mô tô, xe con (A).",
            "Xe con (A), xe con (B), mô tô + xe đạp.",
            "Mô tô + xe đạp, xe con (A), xe con (B).",
        ],
        "correct":""
    },
    {
        "image": "q521.png",
        "no": 521,
        "index": 521,
        "text": "Theo hướng mũi tên, những hướng nào xe tải được phép đi?",
        "tip": "Biển số R.301d \"Chỉ được rẽ phải\" áp dụng với xe tải (biển phụ) nên hướng 3, 4 rẽ trái bị cấm.\nHướng 2 có biển cấm xe tải đi vào.\nNên xe tải chỉ có thể chạy theo hướng 1 là đáp án đúng.",
        "answers": [
            "Chỉ hướng 1.",
            "Hướng 1, 3 và 4.",
            "Hướng 1, 2 và 3",
            "Cả bốn hướng.",
        ],
        "correct":""
    },
    {
        "image": "q522.png",
        "no": 522,
        "index": 522,
        "text": "Những hướng nào xe tải được phép đi?",
        "tip": "Xe tải cấm rẽ phải (biển phụ) nên chỉ đi được hướng 2 và hướng 3.",
        "answers": [
            "Cả ba hướng.",
            "Hướng 2 và 3.",
        ],
        "correct":""
    },
    {
        "image": "q523.png",
        "no": 523,
        "index": 523,
        "text": "Những hướng nào ô tô tải được phép đi?",
        "tip": "Hướng 2,3,4 bị cấm do có biển cấm xe ô tô đi vào.\nHướng 1 và 5 xe tải đi được bình thường.",
        "answers": [
            "Chỉ hướng 1.",
            "Hướng 1 và 4.",
            "Hướng 1 và 5.",
            "Hướng 1, 4 và 5.",
        ],
        "correct":""
    },
    {
        "image": "q524.png",
        "no": 524,
        "index": 524,
        "text": "Những hướng nào ô tô tải được phép đi?",
        "tip": "Hướng 2 có biển cấm xe tải nên xe tải không được phép đi vào.",
        "answers": [
            "Cả bốn hướng.",
            "Trừ hướng 2.",
            "Hướng 2, 3 và 4.",
            "Trừ hướng 4.",
        ],
        "correct":""
    },
    {
        "image": "q525.png",
        "no": 525,
        "index": 525,
        "text": "Xe nào được quyền đi trước trong trường hợp này?",
        "tip": "Thứ tự ưu tiên: Xe ưu tiên - Đường ưu tiên - Bên phải trống - Rẽ phải - Đi thẳng - Rẽ trái.\nXe mô tô rẽ trái từ đường ưu tiên vào đường ưu tiên (theo biển báo và biển phụ) nên được quyền đi trước.",
        "answers": [
            "Mô tô.",
            "Xe con.",
        ],
        "correct":""
    },
    {
        "image": "q526.png",
        "no": 526,
        "index": 526,
        "text": "Ô tô con đi theo chiều mũi tên có vi phạm quy tắc giao thông không?",
        "tip": "Biển số R.301a được đặt trước ngã ba, ngã tư. Các xe chỉ được đi thẳng ở khu vực ngã ba, ngã tư.",
        "answers": [
            "Không vi phạm.",
            "Vi phạm.",
        ],
        "correct":""
    },
    {
        "image": "q527.png",
        "no": 527,
        "index": 527,
        "text": "Xe nào vi phạm quy tắc giao thông?",
        "tip": "Xe con quay đầu đè vạch liền trên đường nên vi phạm.",
        "answers": [
            "Xe khách.",
            "Mô tô.",
            "Xe con.",
            "Xe con và mô tô.",
        ],
        "correct":""
    },
    {
        "image": "q528.png",
        "no": 528,
        "index": 528,
        "text": "Các xe đi như thế nào là đúng quy tắc giao thông?",
        "tip": "Giơ tay thẳng đứng: Tất cả dừng, trừ xe đã ở trong ngã tư được phép đi;\nGiang ngang tay: Trái phải đi; Trước sau dừng;\nTay phải giơ trước: Sau, phải dừng, trước rẽ phải, trái đi các hướng, người đi bộ qua đường đi sau người điều khiển.",
        "answers": [
            "Các xe ở phía tay phải và tay trái của người điều khiển được phép đi thẳng.",
            "Cho phép các xe ở mọi hướng được rẽ phải.",
            "Tất cả các xe phải dừng lại trước ngã tư, trừ những xe đã ở trong ngã tư được phép tiếp tục đi.",
        ],
        "correct":""
    },
    {
        "image": "q529.png",
        "no": 529,
        "index": 529,
        "text": "Theo hướng mũi tên, xe nào được phép đi?",
        "tip": "Giang ngang tay: Trái phải đi; Trước sau dừng.\nXe mô tô và xe tải được phép đi là đáp án đúng.",
        "answers": [
            "Mô tô, xe con.",
            "Xe con, xe tải.",
            "Mô tô, xe tải.",
            "Cả ba xe.",
        ],
        "correct":""
    },
    {
        "image": "q530.png",
        "no": 530,
        "index": 530,
        "text": "Xe con vượt xe tải như trường hợp này có đúng không?",
        "tip": "Xe con đi thẳng và xe tải rẽ trái không giao nhau nên được phép vượt trong trường hợp này.",
        "answers": [
            "Đúng.",
            "Không đúng.",
        ],
        "correct":""
    },
    {
        "image": "q531.png",
        "no": 531,
        "index": 531,
        "text": "Xe nào vượt đúng quy tắc giao thông?",
        "tip": "Theo hướng xe tải, vượt xe khách đè vạch liền nên vi phạm.\n Theo hướng xe con, xe con vượt xe tải đè vạch đứt nên không vi phạm quy tắc giao thông là đáp án đúng.",
        "answers": [
            "Xe tải.",
            "Cả hai xe.",
            "Xe con.",
        ],
        "correct":""
    },
    {
        "image": "q532.png",
        "no": 532,
        "index": 532,
        "text": "Đi theo hướng mũi tên, xe nào vi phạm quy tắc giao thông?",
        "tip": "Biển cấm xe ngược chiều không có tác dụng với xe chữa cháy (xe ưu tiên) nên không vi phạm.\nTrước mặt xe tải có biển cấm rẽ trái và quay đầu nên vi phạm là đáp án đúng.",
        "answers": [
            "Xe chữa cháy.",
            "Xe tải.",
            "Cả hai xe.",
        ],
        "correct":""
    },
    {
        "image": "q533.png",
        "no": 533,
        "index": 533,
        "text": "Thứ tự các xe đi như thế nào là đúng quy tắc giao thông?",
        "tip": "Thứ tự ưu tiên: Xe ưu tiên - Đường ưu tiên - Bên phải trống - Rẽ phải - Đi thẳng - Rẽ trái.\n1. Xe tải: Rẽ phải; 2. Xe khách: Đi thẳng; 3. Xe con: Rẽ trái.",
        "answers": [
            "Xe khách, xe tải, xe con.",
            "Xe con và xe tải, xe khách.",
            "Xe tải, xe khách, xe con.",
        ],
        "correct":""
    },
    {
        "image": "q534.png",
        "no": 534,
        "index": 534,
        "text": "Thứ tự các xe đi như thế nào là đúng quy tắc giao thông?",
        "tip": "Thứ tự ưu tiên: Xe ưu tiên - Đường ưu tiên - Bên phải trống - Rẽ phải - Đi thẳng - Rẽ trái.\n1. Xe khách và xe tải cùng rẽ phải nên cùng nhau đi trước. Hãy nhìn đáp án có chữ \"VÀ\".",
        "answers": [
            "Xe khách và xe tải, xe con.",
            "Xe tải, xe khách, xe con.",
            "Xe con, xe khách, xe tải.",
        ],
        "correct":""
    },
    {
        "image": "q535.png",
        "no": 535,
        "index": 535,
        "text": "Những hướng nào ô tô tải được phép đi?",
        "tip": "Biển số P.102 \"Cấm đi ngược chiều\" ở hướng 4 nên hướng này không được phép đi.",
        "answers": [
            "Cả bốn hướng.",
            "Chỉ hướng 1 và 2.",
            "Trừ hướng 4.",
        ],
        "correct":""
    },
    {
        "image": "q536.png",
        "no": 536,
        "index": 536,
        "text": "Theo hướng mũi tên, thứ tự các xe đi như thế nào là đúng?",
        "tip": "Thứ tự ưu tiên: Xe ưu tiên - Đường ưu tiên - Bên phải trống - Rẽ phải - Đi thẳng - Rẽ trái.\n1. Xe công an: Xe ưu tiên;\n2. Xe con: Đường ưu tiên, bên phải trống;\n3. Xe tải: Đường ưu tiên, bên phải vướng xe con nếu đi trước;\n4. Xe khách: Đường không ưu tiên.",
        "answers": [
            "Xe công an, xe con, xe tải, xe khách.",
            "Xe con, xe khách và xe công an, xe tải.",
            "Xe công an, xe con, xe khách, xe tải.",
            "Xe con, xe tải, xe khách, xe công an.",
        ],
        "correct":""
    },
    {
        "image": "q537.png",
        "no": 537,
        "index": 537,
        "text": "Những hướng nào ô tô tải được phép đi?",
        "tip": "Trước mặt xe tải là Biển số P.123a \"Cấm rẽ trái\" không cấm quay đầu (hướng 3).\nHướng 4 là Biển số P.109 \"Cấm máy kéo\" không cấm xe tải.\nNên các hướng 1, 3 và 4 là câu trả lời đúng.",
        "answers": [
            "Cả bốn hướng.",
            "Hướng 1, 2 và 3.",
            "Hướng 1 và 4.",
            "Hướng 1, 3 và 4.",
        ],
        "correct":""
    },
    {
        "image": "q538.png",
        "no": 538,
        "index": 538,
        "text": "Trong hình dưới đây, xe nào chấp hành đúng quy tắc giao thông?",
        "tip": "Xe khách chờ đèn đỏ rẽ trái. Xe tải đi thẳng và rẽ phải theo tín hiệu đèn xanh. Xe con đi thẳng và rẽ phải theo tín hiệu đèn xanh. Xe mô tô chờ đèn đỏ rẽ trái. Nên tất cả xe đều chấp hành.",
        "answers": [
            "Chỉ xe khách, mô tô.",
            "Tất cả các loại xe trên.",
            "Không xe nào chấp hành đúng quy tắc giao thông.",
        ],
        "correct":""
    },
    {
        "image": "q539.png",
        "no": 539,
        "index": 539,
        "text": "Theo hướng mũi tên, những hướng nào xe mô tô được phép đi?",
        "tip": "Hướng 2 có Biển số P.104 \"Cấm mô tô\". Hướng 3 Biển số P.103a \"Cấm ô tô\" nhưng không cấm mô tô. Nên đáp án đúng là hướng 1 và hướng 3.",
        "answers": [
            "Cả ba hướng.",
            "Hướng 1 và 2.",
            "Hướng 1 và 3",
            "Hướng 2 và 3.",
        ],
        "correct":""
    },
    {
        "image": "q540.png",
        "no": 540,
        "index": 540,
        "text": "Trong trường hợp này, thứ tự xe đi như thế nào là đúng quy tắc giao thông?",
        "tip": "Thứ tự ưu tiên: Xe ưu tiên - Đường ưu tiên - Bên phải trống - Rẽ phải - Đi thẳng - Rẽ trái.\n1. Xe quân sự: Xe ưu tiên cùng cấp xe công an nhưng đi thẳng;\n2. Xe công an: Xe ưu tiên; rẽ trái;\n3. Xe con và xe mô tô: Cùng đi thẳng.",
        "answers": [
            "Xe công an, xe quân sự, xe con + mô tô.",
            "Xe quân sự, xe công an, xe con + mô tô.",
            "Xe mô tô + xe con, xe quân sự, xe công an.",
        ],
        "correct":""
    },
    {
        "image": "q541.png",
        "no": 541,
        "index": 541,
        "text": "Xe nào phải nhường đường là đúng quy tắc giao thông?",
        "tip": "Xe xuống dốc A phải nhường đường cho xe đang lên dốc B.",
        "answers": [
            "Xe A.",
            "Xe B.",
        ],
        "correct":""
    },
    {
        "image": "q542.png",
        "no": 542,
        "index": 542,
        "text": "Xe con quay đầu đi ngược lại như hình vẽ dưới có vi phạm quy tắc giao thông không?",
        "tip": "Xe con quay đầu đè vạch nên vi phạm.",
        "answers": [
            "Không vi phạm.",
            "Vi phạm.",
        ],
        "correct":""
    },
    {
        "image": "q543.png",
        "no": 543,
        "index": 543,
        "text": "Trong hình dưới, những xe nào vi phạm quy tắc giao thông?",
        "tip": "Xe mô tô C chạy vào làn dành riêng xe ô tô: Vi phạm; Xe con E chạy vào làn dành riêng xe máy: Vi phạm.",
        "answers": [
            "Xe con (E), mô tô (C).",
            "Xe tải (A), mô tô (D).",
            "Xe khách (B), mô tô (C).",
            "Xe khách (B), mô tô (D).",
        ],
        "correct":""
    },
    {
        "image": "q544.png",
        "no": 544,
        "index": 544,
        "text": "Để điều khiển cho xe đi thẳng, người lái xe phải làm gì là đúng quy tắc giao thông?",
        "tip": "Người lái xe phải nhường đường xe con rẽ trái trước vì xe con rẽ trái đã vào nơi giao nhau trước (đã qua vạch).",
        "answers": [
            "Nhường xe con rẽ trái trước.",
            "Đi thẳng không nhường.",
        ],
        "correct":""
    },
    {
        "image": "q545.png",
        "no": 545,
        "index": 545,
        "text": "Người lái xe điều khiển xe chạy theo hướng nào là đúng quy tắc giao thông?",
        "tip": "Hướng 4: Biển số P.123b \"Cấm rẽ phải\"; Hướng 3: Biển số P.102 \"Cấm đi ngược chiều\";\nNên chỉ có thể đi theo hướng 1 và hướng 2 là câu trả lời đúng.",
        "answers": [
            "Chỉ hướng 2.",
            "Hướng 1 và 2.",
            "Tất cả các hướng trừ hướng 3.",
            "Tất cả các hướng trừ hướng 4.",
        ],
        "correct":""
    },
    {
        "image": "q546.png",
        "no": 546,
        "index": 546,
        "text": "Xe nào phải nhường đường là đúng quy tắc giao thông?",
        "tip": "Xe con (A) đang đi trước và xi nhan trái nên được đi trước, xe con (B) xi nhan phải và đi sau nên phải nhường.",
        "answers": [
            "Xe con (A).",
            "Xe con (B).",
        ],
        "correct":""
    },
    {
        "image": "q547.png",
        "no": 547,
        "index": 547,
        "text": "Người lái xe điều khiển xe rẽ trái như thế nào là đúng quy tắc giao thông?",
        "tip": "Xe tải đã vào nơi giao nhau trước nên được đi đầu tiên; Tiếp theo xe buýt: Đi thẳng; Cuối cùng là xe của bạn: Rẽ trái.",
        "answers": [
            "Rẽ trái ngay trước xe buýt.",
            "Rẽ trái trước xe tải.",
            "Nhường đường cho xe buýt và xe tải.",
        ],
        "correct":""
    },
    {
        "image": "q548.png",
        "no": 548,
        "index": 548,
        "text": "Trong hình dưới, những xe nào vi phạm quy tắc giao thông?",
        "tip": "Nhìn vào bảng chỉ dẫn loại phương tiện theo làn đường: Xe con (E) đi trên làn dành riêng cho mô tô nên vi phạm: Xe mô tô (D) chạy trên làn dành riêng xe ô tô nên cũng vi phạm.",
        "answers": [
            "Xe con (B), mô tô (C).",
            "Xe con (A), mô tô (C).",
            "Xe con (E), mô tô (D).",
            "Tất cả các loại xe trên.",
        ],
        "correct":""
    },
    {
        "image": "q549.png",
        "no": 549,
        "index": 549,
        "text": "Xe nào đi trước là đúng quy tắc giao thông?",
        "tip": "Trước mặt xe của bạn có Biển số W.208 \"Giao nhau với đường ưu tiên\" nên phải ưu tiên các xe đang đi trên đường ưu tiên. Xe tải được ưu tiên trong trường hợp này.",
        "answers": [
            "Xe của bạn.",
            "Xe tải.",
        ],
        "correct":""
    },
    {
        "image": "q550.png",
        "no": 550,
        "index": 550,
        "text": "Người lái xe có thể quay đầu xe như thế nào là đúng quy tắc giao thông?",
        "tip": "Trước mặt người lái xe có Biển số P.123a \"Cấm rẽ trái\" không cấm quay đầu. Tuy nhiên, hướng B quay đầu đè vạch liền nên vi phạm. Do đó, chỉ có hướng A quay đầu xe là câu trả lời đúng.",
        "answers": [
            "Quay đầu theo hướng A.",
            "Quay đầu theo hướng B.",
            "Cấm quay đầu.",
        ],
        "correct":""
    },
    {
        "image": "q551.png",
        "no": 551,
        "index": 551,
        "text": "Thứ tự các xe đi như thế nào là đúng quy tắc giao thông?",
        "tip": "Thứ tự ưu tiên: Xe ưu tiên - Đường ưu tiên - Bên phải trống - Rẽ phải - Đi thẳng - Rẽ trái.\nXe bạn đang trên đường ưu tiên nên được đi trước.\nXe con rẽ phải không giao nhau với xe bạn nên được đi đồng thời với xe bạn.\nXe tải rẽ trái từ đường không ưu tiên phải nhường đi sau cùng.",
        "answers": [
            "Xe con và xe tải, xe của bạn.",
            "Xe của bạn, xe tải, xe con.",
            "Xe của bạn và xe con, xe tải.",
            "Xe của bạn, xe tải + xe con.",
        ],
        "correct":""
    },
    {
        "image": "q552.png",
        "no": 552,
        "index": 552,
        "text": "Khi muốn vượt xe tải, người lái xe phải làm gì là đúng quy tắc giao thông?",
        "tip": "Chú ý vạch kẻ đường ngăn cách với làn bên trái là vạch liền. Bạn phải bật tín hiệu báo hiệu cho đến khi xe tải phía trước giảm tốc độ và chuyển qua làn bên phải thì bạn mới có thể tăng tốc cho xe vượt qua.",
        "answers": [
            "Tăng tốc cho xe chạy vượt qua.",
            "Bật tín hiệu báo hiệu bằng đèn hoặc còi, khi đủ điều kiện an toàn, tăng tốc cho xe chạy vượt qua.",
            "Đánh lái sang làn bên trái và tăng tốc cho xe chạy vượt qua.",
        ],
        "correct":""
    },
    {
        "image": "q553.png",
        "no": 553,
        "index": 553,
        "text": "Theo tín hiệu đèn, xe nào phải dừng lại là đúng quy tắc giao thông?",
        "tip": "Xe con và xe tải đang ở trên làn đường có tín hiệu đèn đỏ nên phải dừng lại.",
        "answers": [
            "Xe khách, mô tô.",
            "Xe tải, mô tô.",
            "Xe con, xe tải.",
        ],
        "correct":""
    },
    {
        "image": "q554.png",
        "no": 554,
        "index": 554,
        "text": "Xe nào phải nhường đường là đúng quy tắc giao thông?",
        "tip": "Thứ tự ưu tiên: Xe ưu tiên - Đường ưu tiên - Bên phải trống - Rẽ phải - Đi thẳng - Rẽ trái.\n1. Xe tải đi thẳng không phải nhường đường vì không vướng xe nào cả; 2. Xe con: Rẽ phải; 3. Xe khách: Đi thẳng nên phải nhường xe con là câu trả lời đúng.",
        "answers": [
            "Xe tải.",
            "Xe khách.",
            "Xe con.",
        ],
        "correct":""
    },
    {
        "image": "q555.png",
        "no": 555,
        "index": 555,
        "text": "Người lái xe có được vượt xe tải để đi thẳng trong trường hợp này không?",
        "tip": "Tại nơi giao nhau, trên đoạn đường có làn đường dành cho người đi bộ cắt ngang thì không được phép vượt.",
        "answers": [
            "Được vượt.",
            "Cấm vượt.",
        ],
        "correct":""
    },
    {
        "image": "q556.png",
        "no": 556,
        "index": 556,
        "text": "Bạn có được phép vượt xe mô tô phía trước không?",
        "tip": "Tại nơi giao nhau, trên đoạn đường có làn đường dành cho người đi bộ cắt ngang thì không được phép vượt.",
        "answers": [
            "Cho phép.",
            "Không được vượt.",
        ],
        "correct":""
    },
    {
        "image": "q557.png",
        "no": 557,
        "index": 557,
        "text": "Người lái xe dừng tại vị trí nào là đúng quy tắc giao thông?",
        "tip": "Vị trí A vi phạm do dừng bên trái đường.\nBiển số P.131a \"Cấm đỗ xe\" không cấm dừng xe. Do đó vị trí dừng tại B và C là câu trả lời đúng.",
        "answers": [
            "Vị trí A và B.",
            "Vị trí A và C.",
            "Vị trí B và C.",
            "Cả ba vị trí A, B, C.",
        ],
        "correct":""
    },
    {
        "image": "q558.png",
        "no": 558,
        "index": 558,
        "text": "Bạn được dừng xe ở vị trí nào trong tình huống này?",
        "tip": "Biển số P.130 \"Cấm dừng xe và đỗ xe\" và biển phụ báo phạm vi trước và sau biển báo nên không được phép dừng xe tại cả 2 vị trí A và B.",
        "answers": [
            "Được phép dừng ở vị trí A.",
            "Được phép dừng ở vị trí B.",
            "Được phép dừng ở vị trí A và B.",
            "Không được dừng.",
        ],
        "correct":""
    },
    {
        "image": "q559.png",
        "no": 559,
        "index": 559,
        "text": "Theo tín hiệu đèn của xe cơ giới, xe nào vi phạm quy tắc giao thông?",
        "tip": "Biển số R.301a chỉ cho phép các phương tiện đi thẳng trong khi cả hai xe đều có tín hiệu xi nhan rẽ sang hướng khác nên cả 2 xe đều vi phạm quy tắc giao thông.",
        "answers": [
            "Xe mô tô.",
            "Xe ô tô con",
            "Không xe nào vi phạm.",
            "Cả hai xe.",
        ],
        "correct":""
    },
    {
        "image": "q560.png",
        "no": 560,
        "index": 560,
        "text": "Các xe đi theo hướng mũi tên, xe nào vi phạm quy tắc giao thông?",
        "tip": "Xe con trong cả hai phía đều đang ở đúng làn đường và đi theo hướng mà đèn xanh đang bật nên đúng quy tắc.\nXe tải trong cả hai phía đều ở sai làn đường so với hướng rẽ nên vi phạm quy tắc giao thông.",
        "answers": [
            "Xe con.",
            "Xe tải.",
            "Xe con, xe tải.",
        ],
        "correct":""
    },
    {
        "image": "q561.png",
        "no": 561,
        "index": 561,
        "text": "Các xe đi theo hướng mũi tên, xe nào vi phạm quy tắc giao thông?",
        "tip": "Xe con và xe mô tô đang ở đúng làn đường, đúng hướng rẽ với tín hiệu đèn xanh nên đúng quy tắc giao thông.\nXe khách và xe tải đang ở sai làn đường so với hướng rẽ nên đều vi phạm.",
        "answers": [
            "Xe tải, xe con.",
            "Xe khách, xe con.",
            "Xe khách, xe tải.",
        ],
        "correct":""
    },
    {
        "image": "q562.png",
        "no": 562,
        "index": 562,
        "text": "Các xe đi theo hướng mũi tên, xe nào vi phạm quy tắc giao thông?",
        "tip": "Xe con đi đúng làn đường theo hướng rẽ và tín hiệu đèn.\nXe khách: Sai làn đường và tín hiệu đèn.\nXe tải: Đi thẳng vi phạm đèn đỏ.\nXe mô tô: Đi thẳng vi phạm đèn đỏ.",
        "answers": [
            "Xe con, xe tải, xe khách.",
            "Xe tải, xe khách, xe mô tô.",
            "Xe khách, xe mô tô, xe con.",
            "Cả bốn xe.",
        ],
        "correct":""
    },
    {
        "image": "q563.png",
        "no": 563,
        "index": 563,
        "text": "Các xe đi theo hướng mũi tên, xe nào vi phạm quy tắc giao thông?",
        "tip": "Xe con đúng làn đường và tín hiệu đèn.\nXe khách: Sai làn đường; Xe tải: Sai làn đường và tín hiệu đèn.",
        "answers": [
            "Xe khách, xe tải.",
            "Xe khách, xe con.",
            "Xe con, xe tải",
            "Xe khách, xe tải, xe con.",
        ],
        "correct":""
    },
    {
        "image": "q564.png",
        "no": 564,
        "index": 564,
        "text": "Trong tình huống dưới đây, để tránh xe phía trước bị hỏng đột xuất trên đường, người lái xe phải làm gì?",
        "tip": "Chú ý quan sát, bật tín hiệu đèn, còi rồi mới được vượt nên Đáp án 2 trong trường hợp này mô tả chính xác.",
        "answers": [
            "Đánh lái sang trái cho xe vượt qua.",
            "Quan sát phía trước, phía sau, khi đủ điều kiện an toàn, bật tín hiệu bằng đèn hoặc còi rồi cho xe chạy vượt qua.",
            "Cấm vượt.",
        ],
        "correct":""
    },
    {
        "image": "q565.png",
        "no": 565,
        "index": 565,
        "text": "Các xe đi theo hướng mũi tên, xe nào chấp hành đúng quy tắc giao thông?",
        "tip": "Xe con và xe tải: Vi phạm tín hiệu đèn;\nXe khách và xe mô tô: Đúng làn đường và đúng tín hiệu đèn.",
        "answers": [
            "Xe tải, mô tô.",
            "Xe khách, mô tô.",
            "Xe tải, xe con.",
            "Mô tô, xe con.",
        ],
        "correct":""
    },
    {
        "image": "q566.png",
        "no": 566,
        "index": 566,
        "text": "Trong hình dưới, những xe nào vi phạm quy tắc giao thông?",
        "tip": "Xe con (B) và xe tải (D) đang đè lên vạch liền phân tách làn đường nên vi phạm quy tắc giao thông.",
        "answers": [
            "Xe con (A), xe con (B), xe tải (D).",
            "Xe tải (D), xe con (E), xe buýt (G).",
            "Xe tải (D), xe con (B).",
            "Xe con (B), xe con (C).",
        ],
        "correct":""
    },
    {
        "image": "q567.png",
        "no": 567,
        "index": 567,
        "text": "Các xe đi theo thứ tự nào là đúng quy tắc giao thông đường bộ?",
        "tip": "Thứ tự ưu tiên: Xe ưu tiên - Đường ưu tiên - Bên phải trống - Rẽ phải - Đi thẳng - Rẽ trái.\nBiển báo phía trước là đường ưu tiên và biển phụ báo hướng di chuyển của xe mô tô là hướng ưu tiên.\n1. Xe mô tô: Đường ưu tiên;\n2. Xe con: Đường không ưu tiên, bên phải trống;\n3. Xe của bạn: Đường không ưu tiên, bên phải vướng xe con.",
        "answers": [
            "Xe của bạn, mô tô, xe con.",
            "Xe con, xe của bạn, mô tô.",
            "Mô tô, xe con, xe của bạn.",
        ],
        "correct":""
    },
    {
        "image": "q568.png",
        "no": 568,
        "index": 568,
        "text": "Các xe đi theo thứ tự nào là đúng quy tắc giao thông đường bộ?",
        "tip": "Thứ tự ưu tiên: Xe ưu tiên - Đường ưu tiên - Đường cùng cấp: Bên phải trống, rẽ phải, đi thẳng, rẽ trái.\n1. Xe con: Rẽ phải; 2. Xe của bạn: Đi thẳng; 3. Mô tô: Rẽ trái.",
        "answers": [
            "Xe của bạn, mô tô, xe con.",
            "Xe con, xe của bạn, mô tô.",
            "Mô tô, xe con, xe của bạn.",
        ],
        "correct":""
    },
    {
        "image": "q569.png",
        "no": 569,
        "index": 569,
        "text": "Xe nào phải dừng lại trong trường hợp này?",
        "tip": "Xe con dừng lại vì phía trước là tín hiệu đèn đỏ. Xe của bạn được đi vì rẽ phải trước đèn đỏ nên không vi phạm.",
        "answers": [
            "Xe con.",
            "Xe của bạn.",
            "Cả hai xe.",
        ],
        "correct":""
    },
    {
        "image": "q570.png",
        "no": 570,
        "index": 570,
        "text": "Xe của bạn được đi theo hướng nào trong trường hợp này?",
        "tip": "Làn đường mà xe của bạn đang đi chỉ được đi thẳng hoặc rẽ trái thôi. Nếu bạn chọn rẽ phải là bị đèn tín hiệu nó lừa rồi đó.",
        "answers": [
            "Đi thẳng hoặc rẽ trái.",
            "Đi thẳng hoặc rẽ phải.",
            "Rẽ trái.",
            "Đi thẳng, rẽ phải hoặc rẽ trái.",
        ],
        "correct":""
    },
    {
        "image": "q571.png",
        "no": 571,
        "index": 571,
        "text": "Xe của bạn được đi theo hướng nào trong trường hợp này?",
        "tip": "Bạn phải dừng lại chờ đèn đỏ và làn đường bạn đang dừng xe chỉ được rẽ trái hoặc đi thẳng khi đèn xanh.",
        "answers": [
            "Chuyển sang làn đường bên phải và rẽ phải.",
            "Dừng lại trước vạch dừng và rẽ phải khi đèn xanh.",
            "Dừng lại trước vạch dừng và đi thẳng hoặc rẽ trái khi đèn xanh.",
        ],
        "correct":""
    },
    {
        "image": "q572.png",
        "no": 572,
        "index": 572,
        "text": "Bạn xử lý như thế nào trong trường hợp này?",
        "tip": "Xe tải đã vào nơi giao nhau trước nên sẽ được ưu tiên trước. Biển báo phía trước là đường ưu tiên dành cho xe thô sơ nên phải nhường đường cho xe đạp. Do đó, xe bạn rẽ phải sau xe tải và xe đạp.",
        "answers": [
            "Tăng tốc độ, rẽ phải trước xe tải và xe đạp.",
            "Giảm tốc độ, rẽ phải sau xe tải và xe đạp.",
            "Tăng tốc độ, rẽ phải trước xe đạp.",
        ],
        "correct":""
    },
    {
        "image": "q573.png",
        "no": 573,
        "index": 573,
        "text": "Bạn xử lý như thế nào trong trường hợp này?",
        "tip": "Ở vạch kẻ đường dành cho người đi bộ có người chuẩn bị sang đường nên phải nhường đường và không được phép vượt.\nNên bạn phải nhường đường cho người đi bộ và rẽ phải sau xe con màu xanh.",
        "answers": [
            "Tăng tốc độ, rẽ phải trước xe con màu xanh phía trước và người đi bộ.",
            "Giảm tốc độ, để người đi bộ qua đường và rẽ phải trước xe con màu xanh.",
            "Giảm tốc độ, để người đi bộ qua đường và rẽ phải sau xe con màu xanh.",
        ],
        "correct":""
    },
    {
        "image": "q574.png",
        "no": 574,
        "index": 574,
        "text": "Bạn xử lý như thế nào trong trường hợp này?",
        "tip": "Trước mặt bạn có biển Biển số R.122 \"Dừng lại\" nên phải dừng xe và nhường đường. Nên xe của bạn phải nhường đường cho xe đạp và xe khách.",
        "answers": [
            "Nhường đường cho xe khách và đi trước xe đạp.",
            "Nhường đường cho xe đạp và đi trước xe khách.",
            "Nhường đường cho xe đạp và xe khách.",
        ],
        "correct":""
    },
    {
        "image": "q575.png",
        "no": 575,
        "index": 575,
        "text": "Xe nào phải nhường đường trong trường hợp này?",
        "tip": "Biển W.207c \"Giao nhau với đường không ưu tiên\" cho biết xe tải đi từ đường không ưu tiên nên phải nhường đường.",
        "answers": [
            "Xe con.",
            "Xe tải.",
            "Xe của bạn.",
        ],
        "correct":""
    },
    {
        "image": "q576.png",
        "no": 576,
        "index": 576,
        "text": "Xe nào phải nhường đường trong trường hợp này?",
        "tip": "Xe bạn không thể vượt khi phía trước có chướng ngại vật hoặc xe đi ngược chiều. Nên xe bạn phải nhường đường trong tình huống này.",
        "answers": [
            "Xe đi ngược chiều.",
            "Xe của bạn.",
        ],
        "correct":""
    },
    {
        "image": "q577.png",
        "no": 577,
        "index": 577,
        "text": "Bạn xử lý như thế nào khi lái xe ô tô vượt qua đoàn người đi xe đạp có tổ chức?",
        "tip": "Xe của bạn không được vượt khi bên trái có chướng ngại vật hay xe ngược chiều.",
        "answers": [
            "Tăng tốc độ, chuyển sang làn đường bên trái để vượt.",
            "Không được vượt những người đi xe đạp.",
        ],
        "correct":""
    },
    {
        "image": "q578.png",
        "no": 578,
        "index": 578,
        "text": "Phía trước có một xe đang lùi vào nơi đỗ, xe con phía trước đang chuyển sang làn đường bên trái, bạn xử lý như thế nào trong trường hợp này?",
        "tip": "Cần quan sát kỹ xe phía sau trong tình huống này để có hành động hợp lý. Nếu không có xe xin vượt chuyển làn trái đi tiếp. Nếu có xe xin vượt thì giảm tốc độ, ở lại làn đường hoặc dừng lại nếu cần thiết.",
        "answers": [
            "Nếu phía sau không có xe xin vượt, chuyển sang làn đường bên trái.",
            "Nếu phía sau có xe xin vượt, thì giảm tốc độ, ở lại làn đường, dừng lại khi cần thiết.",
            "Tăng tốc độ trên làn đường của mình và vượt xe con.",
            "Ý 1 và ý 2.",
        ],
        "correct":""
    },
    {
        "image": "q579.png",
        "no": 579,
        "index": 579,
        "text": "Bạn xử lý như thế nào khi xe phía trước đang lùi ra khỏi nơi đỗ?",
        "tip": "Không được vượt khi phía trước có chướng ngại vật hay xe chạy ngược chiều. Do đó, cần giảm tốc độ, dừng lại nhường đường.",
        "answers": [
            "Chuyển sang nửa đường bên trái để đi tiếp.",
            "Bấm còi, nháy đèn báo hiệu và đi tiếp.",
            "Giảm tốc độ, dừng lại nhường đường.",
        ],
        "correct":""
    },
    {
        "image": "q580.png",
        "no": 580,
        "index": 580,
        "text": "Phía trước có một xe màu xanh đang vượt xe màu vàng trên làn đường của bạn, bạn xử lý như thế nào trong trường hợp này?",
        "tip": "Vì xe màu xanh đang trên làn đường của bạn, để đảm bảo an toàn, bạn cần phanh xe giảm tốc độ và đi sát lề đường bên phải.",
        "answers": [
            "Phanh xe giảm tốc độ và đi sát lề đường bên phải.",
            "Bấm còi, nháy đèn báo hiệu, giữ nguyên tốc độ và đi tiếp.",
            "Phanh xe giảm tốc độ và đi sát lề đường bên trái.",
        ],
        "correct":""
    },
    {
        "image": "q581.png",
        "no": 581,
        "index": 581,
        "text": "Xe tải phía trước có tín hiệu xin chuyển làn đường, bạn xử lý như thế nào trong trường hợp này?",
        "tip": "Không được vượt khi phía trước có xe đang chuyển làn đường. Do đó, để đảm bảo an toàn bạn cần phanh xe giảm tốc độ chờ xe tải phía trước chuyển làn đường.",
        "answers": [
            "Bật tín hiệu xin chuyển làn đường sang trái để vượt xe tải.",
            "Phanh xe giảm tốc độ chờ xe tải phía trước chuyển làn đường.",
            "Bấm còi báo hiệu và vượt qua xe tải trên làn đường của mình.",
        ],
        "correct":""
    },
    {
        "image": "q582.png",
        "no": 582,
        "index": 582,
        "text": "Bạn xử lý như thế nào trong trường hợp này?",
        "tip": "Trước mặt là Biển số W.208 \"Giao nhau với đường ưu tiên\" nên bạn phải giảm tốc độ, quan sát nhường đường ưu tiên nếu có và đi qua ngã tư.",
        "answers": [
            "Tăng tốc độ và đi thẳng qua ngã tư.",
            "Dừng xe trước vạch dừng.",
            "Giảm tốc độ và đi thẳng qua ngã tư.",
        ],
        "correct":""
    },
    {
        "image": "q583.png",
        "no": 583,
        "index": 583,
        "text": "Các xe đi theo thứ tự nào là đúng quy tắc giao thông đường bộ?",
        "tip": "Thứ tự ưu tiên: Xe ưu tiên - Đường ưu tiên - Bên phải trống - Rẽ phải - Đi thẳng - Rẽ trái.\n1. Xe đạp: Bên phải trống; 2. Xe mô tô: Đi thẳng; 3. Xe của bạn: Rẽ trái.",
        "answers": [
            "Xe của bạn, mô tô, xe đạp.",
            "Xe mô tô, xe đạp, xe của bạn.",
            "Xe đạp, xe mô tô, xe của bạn.",
        ],
        "correct":""
    },
    {
        "image": "q584.png",
        "no": 584,
        "index": 584,
        "text": "Các xe đi theo thứ tự nào là đúng quy tắc giao thông đường bộ?",
        "tip": "Thứ tự ưu tiên: Xe ưu tiên - Đường ưu tiên - Bên phải trống - Rẽ phải - Đi thẳng - Rẽ trái.\n1. Xe của bạn: Đường ưu tiên; 2. Xe con: Đi không ưu tiên, đi thẳng; 3. Xe tải: Đường không ưu tiên, rẽ trái.",
        "answers": [
            "Xe của bạn, xe tải, xe con.",
            "Xe con, xe tải, xe của bạn.",
            "Xe tải, xe của bạn, xe con.",
            "Xe của bạn, xe con, xe tải.",
        ],
        "correct":""
    },
    {
        "image": "q585.png",
        "no": 585,
        "index": 585,
        "text": "Xe nào phải nhường đường trong trường hợp này?",
        "tip": "Thứ tự ưu tiên: Xe ưu tiên - Đường ưu tiên - Bên phải trống - Rẽ phải - Đi thẳng - Rẽ trái.\n1. Xe con: Đường ưu tiên; 2. Xe của bạn: Đường không ưu tiên nên phải nhường đường.",
        "answers": [
            "Xe của bạn.",
            "Xe con.",
        ],
        "correct":""
    },
    {
        "image": "q586.png",
        "no": 586,
        "index": 586,
        "text": "Xe nào phải nhường đường trong trường hợp này?",
        "tip": "Trước mặt xe của bạn có Biển số P.132 \"Nhường đường cho xe cơ giới đi ngược chiều qua đường hẹp\" nên phải nhường đường.",
        "answers": [
            "Xe con.",
            "Xe của bạn.",
        ],
        "correct":""
    },
    {
        "image": "q587.png",
        "no": 587,
        "index": 587,
        "text": "Bạn xử lý như thế nào trong trường hợp này?",
        "tip": "Trước mặt bạn có biển I.423a \"Đường người đi bộ sang ngang\" nên bạn phải giảm tốc độ và nhường đường cho người đi bộ sang đường.",
        "answers": [
            "Tăng tốc độ, đi qua vạch người đi bộ sang đường, để người đi bộ sang đường sau.",
            "Giảm tốc độ, đi qua vạch người đi bộ sang đường, để người đi bộ sang đường sau.",
            "Giảm tốc độ, để người đi bộ sang đường trước, sau đó cho xe đi qua vạch người đi bộ sang đường.",
        ],
        "correct":""
    },
    {
        "image": "q588.png",
        "no": 588,
        "index": 588,
        "text": "Xe nào được đi trước trong trường hợp này?",
        "tip": "Thứ tự ưu tiên: Xe ưu tiên - Đường ưu tiên - Bên phải trống - Rẽ phải - Đi thẳng - Rẽ trái.\nXe của bạn trên đường ưu tiên (theo biển báo) nên được đi trước.",
        "answers": [
            "Xe con.",
            "Xe của bạn.",
        ],
        "correct":""
    },
    {
        "image": "q589.png",
        "no": 589,
        "index": 589,
        "text": "Các xe đi theo thứ tự nào là đúng quy tắc giao thông đường bộ?",
        "tip": "Thứ tự ưu tiên: Xe ưu tiên - Đường ưu tiên - Bên phải trống - Rẽ phải - Đi thẳng - Rẽ trái.\n1. Xe tải: Bên phải trống; 2. Xe con: Đi thẳng; 3. Xe của bạn: Rẽ trái.",
        "answers": [
            "Xe con, xe tải, xe của bạn.",
            "Xe tải, xe con, xe của bạn.",
            "Xe tải, xe của bạn, xe con.",
        ],
        "correct":""
    },
    {
        "image": "q590.png",
        "no": 590,
        "index": 590,
        "text": "Bạn xử lý như thế nào trong trường hợp này?",
        "tip": "Phía trước khuất tầm nhìn, bên trái làn đường là vạch liền nên bạn cần phải giảm tốc độ, đi sát làn đường bên phải để đảm bảo đi đúng làn đường.",
        "answers": [
            "Tăng tốc độ cho xe lấn sang phần đường bên trái.",
            "Giảm tốc độ cho xe lấn sang phần đường bên trái.",
            "Giảm tốc độ cho xe đi sát phần đường bên phải.",
        ],
        "correct":""
    },
    {
        "image": "q591.png",
        "no": 591,
        "index": 591,
        "text": "Xe nào được đi trước trong trường hợp này?",
        "tip": "Thứ tự ưu tiên: Xe ưu tiên - Đường ưu tiên - Bên phải trống - Rẽ phải - Đi thẳng - Rẽ trái.\n1. Xe tải: Đi thẳng; 2. Xe của bạn: Rẽ trái.",
        "answers": [
            "Xe tải.",
            "Xe của bạn.",
        ],
        "correct":""
    },
    {
        "image": "q592.png",
        "no": 592,
        "index": 592,
        "text": "Xe nào dừng đúng theo quy tắc giao thông?",
        "tip": "Biển số W.211a \"Giao nhau với đường sắt không có rào chắn\" thì các phương tiện đứng cách xa đường sắt tối thiểu 5m nên xe con đúng.",
        "answers": [
            "Xe con.",
            "Xe mô tô.",
            "Cả 2 xe đều sai.",
        ],
        "correct":""
    },
    {
        "image": "q593.png",
        "no": 593,
        "index": 593,
        "text": "Các xe đi theo thứ tự nào là đúng quy tắc giao thông đường bộ?",
        "tip": "Thứ tự ưu tiên: Xe ưu tiên - Đường ưu tiên - Bên phải trống - Rẽ phải - Đi thẳng - Rẽ trái.\n1. Xe của bạn: Bên phải trống, đi thẳng; 2. Xe tải: Rẽ trái, bên phải trống (khi xe bạn đã đi rồi); 3. Xe đạp: Rẽ trái.",
        "answers": [
            "Xe tải, xe đạp, xe của bạn.",
            "Xe của bạn, xe đạp, xe tải.",
            "Xe của bạn, xe tải, xe đạp.",
        ],
        "correct":""
    },
    {
        "image": "q594.png",
        "no": 594,
        "index": 594,
        "text": "Để điều khiển xe rẽ trái, bạn chọn hướng đi nào dưới đây?",
        "tip": "Vạch kẻ đường nét đứt màu vàng, phân chia 2 chiều xe chạy. Do đó, hướng 2 sẽ đi bên trái đường 1 đoạn nên không được phép. Do đó, bạn chỉ được chọn theo hướng 1 để rẽ trái.",
        "answers": [
            "Hướng 1.",
            "Hướng 2.",
            "Cả 02 hướng đều được.",
        ],
        "correct":""
    },
    {
        "image": "q595.png",
        "no": 595,
        "index": 595,
        "text": "Khi gặp xe ngược chiều bật đèn pha trong tình huống dưới đây, bạn xử lý như thế nào?",
        "tip": "Giữ nguyên đèn chiếu gần và giảm tốc độ do không thể quan sát rõ phía trước.",
        "answers": [
            "Bật đèn chiếu xa, tăng tốc độ vượt xe cùng chiều.",
            "Giữ nguyên đèn chiếu gần, giảm tốc độ, đi sau xe phía trước.",
            "Giữ nguyên đèn chiếu gần, tăng tốc độ vượt xe cùng chiều.",
        ],
        "correct":""
    },
    {
        "image": "q596.png",
        "no": 596,
        "index": 596,
        "text": "Xe của bạn đang di chuyển gần đến khu vực giao cắt với đường sắt, khi rào chắn đang dịch chuyển, bạn điều khiển xe như thế nào là đúng quy tắc giao thông?",
        "tip": "Bắt buộc phải dừng xe.",
        "answers": [
            "Quan sát nếu thấy không có tàu thì tăng tốc cho xe vượt qua đường sắt.",
            "Dừng lại trước rào chắn một khoảng cách an toàn.",
            "Ra tín hiệu, yêu cầu người gác chắn tàu kéo chậm Barie để xe bạn qua.",
        ],
        "correct":""
    },
    {
        "image": "q597.png",
        "no": 597,
        "index": 597,
        "text": "Trong tình huống dưới đây, xe con màu đỏ nhập làn đường cao tốc theo hướng mũi tên là đúng hay sai?",
        "tip": "Khi nhập làn cao tốc phải chạy dọc theo làn tạm để đủ thời gian quan sát, khoảng cách an toàn và đủ tốc độ trước khi di chuyển vào làn cao tốc nên trong tình huống này xe màu đỏ sai khi nhập làn cao tốc.",
        "answers": [
            "Đúng.",
            "Sai.",
        ],
        "correct":""
    },
    {
        "image": "q598.png",
        "no": 598,
        "index": 598,
        "text": "Trong tình huống dưới đây, xe con màu đỏ có được phép vượt khi xe con màu xanh đang vượt xe tải hay không?",
        "tip": "Xe xin vượt chỉ được vượt khi không có chướng ngại vật phía trước, không có xe chạy ngược chiều trong đoạn đường định vượt, xe chạy trước không có tín hiệu vượt xe khác và đã tránh về bên phải. Do đó, xe màu đỏ không được vượt.",
        "answers": [
            "Được vượt.",
            "Không được vượt.",
        ],
        "correct":""
    },
    {
        "image": "q599.png",
        "no": 599,
        "index": 599,
        "text": "Trong tình huống dưới đây, xe con màu vàng vượt xe con màu đỏ là đúng quy tắc giao thông hay không?",
        "tip": "Xe màu đỏ đang tránh về phía bên phải, xe màu vàng đã có tín hiệu xin vượt, vạch kẻ đường theo hướng xe chạy là nét đứt , không có xe ngược chiều. Nên xe vàng vượt đúng quy tắc giao thông.",
        "answers": [
            "Đúng.",
            "Không đúng.",
        ],
        "correct":""
    },
    {
        "image": "q600.png",
        "no": 600,
        "index": 600,
        "text": "Trong tình huống dưới đây, xe đầu kéo kéo rơ moóc (xe container) đang rẽ phải, xe con màu xanh đi như thế nào để đảm bảo an toàn?",
        "tip": "Giảm tốc độ chờ xe đầu kéo rẽ phải rồi mới tiếp tục đi.",
        "answers": [
            "Vượt về phía bên phải để đi tiếp.",
            "Giảm tốc độ chờ xe đầu kéo rẽ phải, rồi tiếp tục đi.",
            "Vượt về phía bên trái để đi tiếp.",
        ],
        "correct":""
    }
]
// export {originalQuestions}
// let currentQuestion = 0;
// let score = 0;
// const questionQty = document.querySelector(".question__qty");
// const questionTitle = document.querySelector(".question__title");
// const suggestAnswer = document.querySelector(".suggest__answer");
// const answerBtn = document.querySelectorAll(".answer__button");
// const feedbackEl = document.querySelector(".feedback");
// const questionImage = document.querySelector(".question__img");

// function loadQuestion() {
//     const currentQuiz = originalQuestions[currentQuestion];
//     questionQty.textContent =("câu"+ currentQuiz.no+":")
//     questionTitle.textContent = currentQuiz.text;
//     suggestAnswer.textContent = currentQuiz.tip;
    
//     if (currentQuiz.image === "") {
//         questionImage.disabled = true;
//     } else {
//         const imageLink = currentQuiz.image;
//         questionImage.src =`./assets/img/${imageLink}`
//     }
//     answerBtn.forEach((btn, index) => {
//         btn.textContent = currentQuiz.answers[index];
//         btn.disabled = false;
//         btn.style.backgroundColor = "";
//         if (btn.textContent === "") {
//             btn.textContent = " dang cap nhat"
//         }
//     })
// }
// const nextBtn = document.querySelector(".next");
// const prevBtn = document.querySelector(".prev");
// answerBtn.forEach((btn) => {
//     btn.addEventListener("click", (e) => {
//         const selected = parseInt(e.target.getAttribute("data-index"));
//         const correct = originalQuestions[currentQuestion].correct;
//         const ansTotal = document.querySelector(".ans__total");
//         if (selected === correct) {
//             score++ ;
//             ansTotal.textContent = `Điểm Của Bạn Là: ${score}`;
//             feedbackEl.textContent = "✅ Chính xác!";
//             e.target.style.backgroundColor = "#3766e7";
            
//         } else {
//             score--;
//             ansTotal.textContent =`Điểm Của Bạn Là: ${score} ` ;
//             feedbackEl.textContent = `❌ Sai rồi!`;
//             e.target.style.backgroundColor = "tomato";
//         }
//         btn.disabled = true
//     })
// });
// prevBtn.addEventListener("click", () => {
//     currentQuestion--;
//     loadQuestion();
    
// });
// nextBtn.addEventListener("click", () => {
//   currentQuestion++;
//   if (currentQuestion < originalQuestions.length) {
//     loadQuestion();
//   } else {
//     questionTitle.textContent = `🎉 Bạn đã hoàn thành quiz!`;
//     feedbackEl.textContent = `Điểm của bạn: ${score}/${questionList.length}`;
//     document.querySelector("ul").style.display = "none";
//     nextBtn.style.display = "none";
//     prevBtn.style.display = "none";
//   }
// });

// // chon cau
// const quesBtnList = document.querySelectorAll(".ques__qty--btn");
// quesBtnList.forEach((quesBtn) => {
//     quesBtn.addEventListener("click", function () {
//         currentQuestion = quesBtn.getAttribute("id") - 1;
//         loadQuestion();
//     })
// });
// loadQuestion();
export { originalQuestions };
//  da cap nhat toi cau 200