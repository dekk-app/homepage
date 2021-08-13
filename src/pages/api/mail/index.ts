import process from "process";
import { getDecryptedSecret } from "@/ions/crypt/decrypt";
import { ContactFormProps } from "@/types";
import { NextApiHandler } from "next";
import nodemailer from "nodemailer";

const answers = {
	de: {
		subject: "RE: Dekk Kontaktformular",
		title: "Vielen Dank, dass du dich an uns gewandt hast.",
		text: "Wir werden deine Anfrage bearbeiten und so schnell wie möglich antworten.",
		signature: "Dekk | Gregor Adams",
		html: "",
	},
	en: {
		subject: "RE: Dekk contact form",
		title: "Thank you for reaching out.",
		text: "We will review your request and reply as soon as possible.",
		signature: "Dekk | Gregor Adams",
		html: "",
	},
};

const base64Logo =
	"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKoAAABkCAYAAAAWlKtGAAAAAXNSR0IArs4c6QAAAIRlWElmTU0AKgAAAAgABQESAAMAAAABAAEAAAEaAAUAAAABAAAASgEbAAUAAAABAAAAUgEoAAMAAAABAAIAAIdpAAQAAAABAAAAWgAAAAAAAABIAAAAAQAAAEgAAAABAAOgAQADAAAAAQABAACgAgAEAAAAAQAAAKqgAwAEAAAAAQAAAGQAAAAAem/lyAAAAAlwSFlzAAALEwAACxMBAJqcGAAAAVlpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDYuMC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KGV7hBwAAHoJJREFUeAHtnAmwLVV1hjGJIg7gFFEQhCeooHEoUQtIRDBinKJRMVFBUIY4DxUtBaeUFaNWnCtUykqMEE3FJKVRwQkZjClwSlRUHMGHwsMRUAHRzP93e3+P/c4753T3Od3ngnVX1eo99N5r/WvYe3f3ue/daIcbJt0osH8t/D8T8G+c9u7hTeG9wnuHae8avnXhXVLePHzT8K+HkfNf4f8MXx2+KnxF+CfhH4YvC18S/nZ4c6lfk1ICy//Z2CjH8QBOviHTzgF/v/Bvhx8Y3j9MYt4kPAaRkN8Lk7TnhF8T/mV4I1njhA2a7oGT0/3jMMkzyf+dPndJSpl+duH/LVzPo497znUOOy1Mfz2e+rPDEDv5Bo3ogd8YUfYYosFLwjws/KyiwASjyVHO7kbZl5jX5YRBH7voTuEdwxu0Ag/c0BLVRDq8+OYXKUmWVe5oYDBBv1pwsLtu0Ige6JqoBIeXDkqYXQWiDrHLQcrjCB0jeMrkZQhyB21aq7mCAV9cGf5sUak/SnOjGNoDJtYsud4nESffsCfnkLQmLHWSqG3OpIy2tgvj820DR7pPknrsvz11vg7gI+1OdYPG8ICBr2XTh/N5majpbmkcED4wzOcfxv00TDLuF75ZmB3mH8MfCkMcyZNy1m4seGEnY/fiE9OF4duVNv1Dkju3JTph7MHuT4QPDUO0HbfWsU4XfKAfwANfn3f6Sby4Tdyt/nQHZRJ0SPit4S+HPc5rYbPq52X8/mFoUmbTu/jV59FnRAT6eSOfhWNaP3aweHybt/Qt39Nj2lwC/7awCWGZrnUh9OOPWS+P+H7WvfUA3IYXTCx8bJqZNyYAg48Lk5yTwTLABtUgE1yYNvec9/upQ7XspmfxK4bA0DlhdNU61T1ZuitO9s9r87J2SfjM8EnhfcLSeiQpdpN405LzNuk/NHxIeN9wHei6nlsro3l4OQ0PC4OZb+GbwrcM18T8NexUIBok2r3Cp4bvE4bYfQgwQWFs1+CQsH50f3jqHw3jXBJqCBLvfSOM51WSDdKepnXdlfve+17q3w1T/jDML1A/C/OrlEyb50/uw/UvUej2dEl1ZUSCYkd9nO+W9u+GHx1+cJjgQ8TyO+EPh98UvjjMfHCviqbhvUOUg/cx4UPDtw1L5Mzl4W+HPxM+PXxOGELW1t3ukanjCJgXBoy1vUjpLgeAfcIQQR6KlHVGBIJPfZNYTSqSk8TeKdyXWKAsNMr1IHRLd0/leeGPh1lAtb1uLHUfcTwqDK0FvKmOeq3x7hVNJ4RZNFeFa2zT8Nb32YQOCm+lB6TmAJLU+rKlsv59q6brdraqa6GqzmDHACcLYhpeE5VjfPcwxFyCRrJTh6lPMmNITnfjVFdK6HVB7pM6u8ykjSxQmIT08Qabaet/5rARQcprWsNea7x3jeiPhCfjIl6TdBIz95lDqa3svmvAv1U6J4U6cJlSZ52EspAJ1rQWv+rwv4sI8M3D7r0XFHVDYVgcffvMevc7NsPrwGEPbYLcFhttvyBjpTEWHniVe3TqNV7qXfHW9lybebS/EN6B4NEwoeqBQ9Td0QB6lzBUB6Hp6X/1GD43U8FZO2YSt8FihUND6G8kjXOt8Z0cFdpDjLokp+MtjcEBBa6LfCj0Nd43T+BVt1gWKdfeETYXwWY8gqkT3JqXUWiinBaZUG1Y09Pv6splZxT/PHwGl2ekXYsqE72f5vFHm0TgY2ERWPw3z755wXcejwIcx9Cy/m+kNFfx0vpAGCzkj3rnYWu75+az9lP1vxThGNI20YRrGzftvkp544OWOX5NMt4ifUA3Gafppk/9f4jy0DL6GwnDXw06fyvLmy+4ebZus22WzfR7Up6YOqSOprXcVVn48tzwEHhrW7CdNi+PO9wjfHUYZ3DjsvAnw28JHxt+Wpjjh08HTCKhF1ktJsrXM99Ec2dMVy9yR7hXZoGpSyBdZO8umnRyL8UjDhYPXyV4JsMuA0V9EXb+hzIfwt+L+nxNQHVxod8sff8RHgJvbaPY31vp3OE307hneFP4lvWNqn6r1P86jDASY5FkNVmemfmQxjat7leD+tBMAU+X08AxX6nUDBW0SuRCVRce/uALyRBBN9BfirwdCyr1lObChf5H7lCLalqSnlUjnBYs+nBazc55TiqLJqvJclFkaOw0/eqaVYILOioMFnfr2tjJugvrxxnPrziQO3vTWp9rnTznBQK4TbJJG7q2nf/1yNqlmKW/S3PhQjmUnwsPgVe72AB9VOFTnLTVR1RkgjctebhvgpisXRJEEJbuqkcWFMoszU6Fc16U0chVpjqmlSYqY/cpWrY6oLRXXdQLheMZ3CbZNBu69BlodmZPR/21rH013k9E2BB4tYn4uJG9owK6cIw0+m0FaJckEQylyX1uAcOimLYwyu2phav69bmLzC4Y6ufYA4pU5UxVMnInNhv4U1LHDpOs9lfXOkE20Lx969OhbKw3sPcNgLe2y5yg7+VhaeEkRYDOpe7zSa2oBjCtTsKYNPdHSKivMx3PykNH10R1Vz0UpSHlNK3VXl3wr45abFgmSWv/s3ilIe0zaU6O8GXx1nmh3eTEEQU4uuo8K939Cx1wv0xFaZ18NYhZdROLLwuQQWta7VedxhshOupAzdIJRhP1UUWFdpTmyoqbFE1PSyl+F+8s/LP6DTT3n1zk1rt16VqqMD4viRT0GL9ZmLr0Y6/Yv5s6X3AgdTWtAa4K/KvI6gveI2pzBcyjqg1aHYQzi+6uiareJxQl65Go+u3ggh3fuYC6BLgeY6AvjYx7F5uQ39WXZcrcwkX1+IwS66KLSuzYayw+lvotCgJ1leYwhbva7hF3TVgjBNNWCvSwAqdr0tRB+HTR2zdR3Xm66iwQly7Ut1skXdkD+6QvSRR3tU+mvnMYGjrQLioWgclp3CYxdW3XsXrtGurmoq6qa7iqwjnCAarzuoB2bN/jv07U84ve2vh5uh331OICE6c0Ry3qZ67PF9zuiPMwT94jYbTj1Aqxsai6lqq6EbEItoTBYcwmMXVtO5+SHRoinupa6xjjooJ9I9zjy5XXBt6V+ZUKWJ2EVfc2Vcegm++E6FFWm04DvB6J6qJ4Z8G8bJK+IXIk42B72RIf6+ezUsevi+Ct4+H8SyNrvzDE4lLPWseYFwPgHyS4amqQ0+p1YvMzLtTF4e5M/CqyOYzsvol6VOZAYm9a4109khf9d17YWO+krytQ8YX+GBK9u/NfRCi6TTLqi7DzOQFvHYb8taxpreBqsB8bXRhB0nTdVd3hTig4lVWaUwsDs1PuXhJWZxcHqm+ViWrQ71uwgtNF2gWzY9wA3EnHSlIX1R9Uvu0aT7HWpUnK+4Sy9Um6VkcmDm9uW8KA7LrD6fx3Fbh9EhV9l/XUJ64n99BXhi5U6Bt2j4vC+MbFUgezra6f+MICjZWknmh7RIcvyPqsDeO0+ybpZyPP2K5LkuI0SBDvTB3AOnYa+LpPJ3wNIR3J4JOo3wsjTzm17Mk6u4LjfJAXd26NQspnIYLHwE1im9d2znsqhPqg6lq6Wj8rnhdpYOoax2n4xc07yE0LOv1RmqsvXCV+a+u6a3ik4JC9C+y2IHh/kUT1yH100TWm4zzmjoouAtnVJ3XQDfZZBS+F9lddg1SN4asjDQzqrvF0rZvgnLC3LeiUX5rrU+i8O0T91WEMMgnbjHOXe2SB3pY86uLvIC8tupQxTxd4TNTDO+oqw3oXHqF7Zua1YXCpex7G+p7BviBzTXrlpmtQMokOjlQw4Kuu8asxUzcW2H23MCT+prXA1aAvMHWbKRiFrO+Hv1juEJguxFzIn9DqI6i5M/3KPJzSh5SNE8cidBAw6G/DHHvspn18jV0kDz8KPDRM0tLu6tMM7UzgBR8bxDvLLPToq9LVqcBu7XxM6t8Ik6TgX4oUupSQMtnV/qnSNlhtsnXIPTvOUy7B7OsAdfGiMBaRUCyi54YfEiYJ6OtKzPVUeXjql4UJNnLGIHW9IcL3DeNT+/rqIyb4+AXhM8KDJGnkDEoa98RIJZkATdnGjvtMxkomlO26rO/x1+vIJ4htekgAxqDv7mHIxdW0lr8qb8+I8u9K+x752vLUAodgj0XG7MAowDdg1U9t/py87zPtKZEBKbtpXY+uBomP9xrbJUgm6pbM4wUJmrfTk6gm63mp4zCDO+m8ui2Wn2f8HmFIzE1r+avyTo8odLM71Rja6gb7jQVKn524TOlc6EMm8LgGti5+nGaDdrJxSPNi6Jh1KQV2y2i/LIxBJuE04+wzgQjS3mHIgDetba84WF0fTR05XRysnh9k/K3CkHKa1nJXk+qIiOmKSR9QmqTnFBjYWSdT6R6sEC/HdK2/xtSlrl9J1n0Kuuvtbgq+2qkc4xjZJYHYfd2BD0wdajPURP77jEWPK3qeY100F2a8QRoqUbWdY/riMDjUNw+T9xzLf8jmv+fSxnQNTtp9+0j+aRgcJpyYupbG+MiCcpRHFQEXHUsVGKZzv9NTEokK8XmrC5kYBLYv8SaNcyEwD0EurJdG2J3DLBx90SYfDMaB3fiKMMEmccYi9b0yCvjrKPDa10cn87D9lPC7w2wA9F3vyYC9KUgJAKAp29hV+YyMhZTTtLa/uiP+SW511aOO04q4rom0vfZtewzwrun+WRg8fXYnj/yXFbGj7EhFNoV275O6O3kfvMZSf14UOWLWF+gZlIYW7E7H99Q+hPHQ7Zpim8eI0jW1+G6P8epwzlC2G/jnBwvP5312J4JNkM8OvyYMJvrGJO1mkYMdffZ11YsvtfupqWMzm4cnY6rDUl+AXbVfXgaauF3n+SdgbeNNus1loE5rm8f9Ib+hmlgcn8cX5W2nQRm2tusSXH7J8/kOedrmuCFL8fKIdVQR3BVvjYPkJravC58bZrGNusDGSlSOwEWIHQlqC5b3eRFgFfdZEEOuehfIscHAadBnd9IG5vLHNSQtR/GYJF4esW4eNuH66AQjiXl++MQycdQkRcdYiepPlH0SCDw7celBJJ0Bt2ybPlQyYBsBAvMLi9Ku/uSoZCc7JfxPpT52sN1NObWeE4a64m1GN752Bz6mdNLu6nvl9C77Am1TIOBFk2HHNgUT93kJgPvQotgmdRgwdqc9wiSaO9bk2LoNXnakLeFnlxtD7vJF5HaF2HiW5i+auuKtBbmYXp1OfiTAjqH8WevZrj50orqDWm6nsKVDZ7YM27qCCXDfIA/hWHdT/oLrRQVsV+zadmwq/ErGkd/XBmV0LYkzSUaCkqhQX7z4jcT8cvhVYcjEbVojXodOVKFiEOQO27SGv7I79Q1y3x14Gmp302fm5m5hAtbFlxz5JMjbwx8Lk6SrCLZJSZLyq1xXvBm6RsRRGceVvpUc+UVXJ+c6tk/pb/Z95jC2b9DWY0d1N71p8Lo7dUnS+sj3mXaIRdPmY3dTEvRZZXAXvLVcdlPsfmP4s2EW2BAnU8R0o76Au0m97mfAvjvqL7oqKOPWY0d1Nz0mGPYIs7jcbVJtJV5keNlcxZEPGLGdkPoiz6b4GKybwy8PQ6tYYI2mch0rUfmVZhHim2IfwmF9nbbsTuCu3+fN2WTmDf/9YXZj5aQ6Grn7k2g8pkAmbtPqfv3jDGUj4bm87+NWdy0zRg6dqO6ge8zQ19b90zIAB3ehRY7+vold43A3PTyd/DkjsroE3jGHZPxhYQKO75WX6iik/MdE+l5hFmnfmBuL52Uun+J4AeQdxP5Ux6e+oOchArhJsKkM7GvMj+YpqO65INDn6ravGja1usyOqo4ji2R1T1VUdeJnsHLSnBXmQzlzweKLZ6qDk/jEK/4+isCOnEeFLwjfP8xLIeRCaFo3kKtJzy8el4ZxCoGgnMcGjDF/FIbaHOAC4KXt+2Hmkgjz9OBc7h8XhjgO+5D2oXNLGFld7KsxMR576TsnvHcYQnabzWsDe1zEyy9mV4bR2eajGutkXf/R/7KwtPLdVcWLlh5vvxUBGtnFMQTO4D2oKG8LmonKUWTStOnS0ccUHX0TVfsemPnYV+PW3i4l88Tyy9T96J/qoLurPnxI5IIL/+jnLjinjeG52v5Pp75/GCIe6lvrGPriqhtCrslzvyKM3aOLfAxnLsG7NAzR14VwHM9MUNsc8RGwRcj5e5fJyLGvjzzmsEjAzm70l+Gzw3cJ4wN85qJIdWES26YiYVG8NQCSET+DkwXLo8BLwvQR79EeY7okUvR3Ih1zaBndljgKddwP0sExDtnXtLa/eh/nmKjbj5rew5xlyD+4YXdahkhWZJCw+OzrYb4k0EdSLbtD6aOrIgtaFm8jpVmcJCS4odeFPxW+a5gEBre5kOr1iwS2S2DxQoSTcDZlG2MwY84JQ8hS3lrHjIuL7LzcZ75yZunz/hOLvL5Hf42JYw8915Zyls6u/QTYsaenznM+tMwOJV5kfCU8JF6xkvw8vtAm3seFpSFOBWUNVhp0PmEAuna8Rs0qHfvWgkZZbeB0xBlFp4k4S4/3H99TT43DxcFfIJ1f9IK/66KchY1+ZBj0zanvG4aWSVZ9dMfI+VYYPegYAm9tizGkj0cZadlTQTmDlAaPF5tLwoDleK0NmVc3gZ6UOVDXRNUJ78sc5NfOmqZPPXxThJzftLpfnUf5D2F1mWS2Fy35xspcHmkOCUPLJKt4+VD/wbC42vzluK4lya/MD6duXnSNZ6aMSwJ5edRglGC7GMjRwTgS+y5hSAOb1uyrATg1Q7rodfHwPRByftPqd3WnYtbTw/yrATCwGNTTxf5ZY2ofPi4yIf3ctPpda1v5yqB8yqF3Vxfa5yLbR5hlsPezdMZok+pOue/zmsk3Kwh1v7vc54t8n6tmqNumW+M5apCp82v5dd0EeniRUgdvG8EdG9huwu6e+gfC6mN37eMH59WlvqHv6DCkzU2r3xW8xmtT6meE1TcEXmVRmqxfS53HJGgZ7I2EJa4G+12RAcC2ZKmNqce/tmDoY4xjmVvLmtRh20R9aNEl9tJcuKiP5SMiZUtYnXWy2denFDNzjisItbs0exc13qMy+4dh5LOwlsVb22ayXhi5twlDy2JvpPS8GujfyTwAcoT02UUY6/gHpg4ps2nNv2r0iRmG/rZFYtAPK2L76JqPpNlZ3V15VufP4QwauLTTvj4luJ3/9NShOtmann5XsLq77pz6yWExDbm7Igu53wyjBxrS743ElqvHNM8igOm7Gk0cj33UKZN6G5mofHtEf9dEPaQIHsNhYkLFvcN8XwQbidbXP8yT6+fIJ6UfWjZZkVHjZbP4Qhid6DM+Yli0NFm/FJk7hqExfN9Inrhq4PHpx4C2JJlmpHNINEiZTav9qrFHZyjy2xLBYB9cRDu/XVO/EexUtS0npa39Bs12n7JOnEcUSEMk6yTe1wyEt7bNx4B/K7gp3NGrrmGrKrhFxF4WBlDtxBrgrLpJw/ORR0Kf3TTTtq5K3oq7YFDngUwOjZWojfRGvjYdlM5LwuBkgXqUz/LPrP7azw+IHKheFE3PYtfaHw+JCJ9dWVyL4q3tMFnfW+DhG/1TuoYtdMyrIhYgi+wS7qavKNCU2Qepjj284CAR5znURDXAPKeNTQTCXY9PNR8M4zOw1ElXB7St7snxs8jYKwwt4r9m5rbXGu9tcuvMMHjAuije2h5z5c2RBxnDpjXg1d0UI64IA8IEqAHNq2swK3aXMKTcptXtaqJxlKOPJJ2XqN7zj2ac303bcqPqRHpZROkfF6ztrqXzLoqsmxVoQ9pT4/3zCq+LpCvOaeOUsegjXzF3fqEBLy7gddg0QLP6nPPCokqZ8zVvf9fA3KdgQZ/JOE239xgPOb9pjX9Fnwvy91K/OgxOd5lpmOf1Oe/syJCUb3uZErwezU9I3QRT7zxs8+6xsRmLhxWAnjqluVwhaKT4dij4ecDqe+6m7AQmSi23D0Ln75tJyu2yu/P3spDzm9ZqrvXRuldUfjWMfwi+wav91VY3afi8BA19lILXjWS/1C8Oi7cN27z7xuuayNs7DA2G3cDeLUJN0C6JUQN23pPWoF3nhNLsVbh73Cmz3J264LlH0aI9vZQONNgdhOCcFsZH+KYL/tqfzqM8Pgwpu2kNc1UmL9CfCKOPk3GRxSV+T1YWq0lqTNO1OBlYVpbK+jhWYP9aIACKFbsoadRtI+DyMJhcqeKz1KGUdw9D2tO0Vn91p0Lzm8JgBd8sG7RlsqxjcEDmQ7Xspmf5ay3zHREHDrDW+iextbX9EvCeAm+QmJBUJgefGABh8rUBIgAmi8+IrqLcWojEwtv0ljAYZgVZ3dzfNww5v2mtz5XAuFifm7p+9OSx3VY6/pLIYNeDxrCvTqRXRoe4Zvnd+/NKc8h3FnfvNSMWvQj0XhVIk2AeGJ+lXl8U16tzUSwGAlnfKnhmOUyMBHRTUej80ly3gkR10T42df1oAG23lfr4/cWSsexDrnlwTIXXxdKGc/I+O7LxOSh1aIj82OrUUyIQpW0O9T5/SaPzLNO1MLkTIeCLYbDMcpaOIJh3DkNDYGgkDXN1JyFYPw9jj8lHvQvr6+dnPKTMpjXcFd+bTA9PXf+qvwvWeoxxuzSyBjsRXE1ddtX6+cXvl+4ey7oNZ5ms56WO4RpcO4G6juSZ6E5h6PqWqGAysXiO/lEY7H2Stfb3PTMXGsrfjbRtr+LlRxTe4MG7aLJq5/uKiqXjY3IgiF0ScB65JoTJIehnFeUaVppLFeDQmI+njs62RGWnMlHZEVh08xj5sDanOjrpI3B+J4xdBpF6G+uD8zNWGhO/eFlcPw73xVvbY748pQB319aO3qW7Km9rAsNBJColClX6ltQh5zStYa7K/OeIA4dBqo2n7gK6KnX/kDfVXoQuHMcONWbgAWXw+aLxzbA+nrRrVtvE/jOEhcbcVZEv3j1T3xLui1c7jB8boLSUr830oyNNJdNKf9NF2VIKRT1RmqinFhwujkksJiq/j/PB/47hfcN8E94/TB+PMpS09wnvHuanYoOQ6jZE8NW/zY2BGvqYn5kvCGOTCThp32TbRwDsvV0Y8vRpWsNf9dOuEb053Advjd9kfVSBuNQiM+kQcmaYBDklzLPKaeFzw48LS2M4CQzKPTt1jNXI2vC6TsLy48C1YTDzyGJQHUebezxz8Zx4UfjTYU6PV4QPD98qLC3lSIXMKE1WXjB8zJq1GMVv6bhjimxlzVA1SLfJyuK4OAwWcYirrXT8uzIXWtq/JivC2Hmm0ZjPdyYpOx/JhwMmk67NKYve51nsb8KbwtAqdlYeWS4Og7nLzmrAT8l4aOmAN2Jary6IO2Tk98LgFUsXfxvDizNvxzBU51rT0/NaCyBYOIPSek9xvYbrkBMzq48zcETN7LKTXN9n14XZrXE4dR1O/dFhaMxE0NY9o+fKMPrbTg9xnpexELGq47XWOdLFnfWuke/XgDa8+pRYWL9HwTeIbzHe3a3IHb3Q4QTw22EMMzAaOWZJIvP4gA52tz3C0Jg7q8G/b/Sgv81m/cEjg/HRb+kancR7UDQZCzHZnlaSqI7zOfXGGrAMapQhfJVkQvBMvHcY/fatAgd+u2mYJCUgjw1DQ/izkbT9ld0cXV8IG0BsbvM9ybnKBI26NRLveWk9ofThny54ySmIrx5rNKZj1TFmaXK2GT8mBmSzw62CDP5HouzoSuE8+3nzXxW+CtJaFbyceu8N8y2dBbMeG1vUrg+5Q5CoF4YxvuszEGOHYP/yB1n7hCEXTtMa7+oz67OjAv0koo8D2kaSUH9XGBrkOa8R1fsq3pdkJpg42ifxiptF573DU4fWE3uDYImr4PmtWSMNju0xShaEjvxJ6icUG1Z9Omn/c2fY70I6ouBzfGmuvHARv7TCW28u1GGfT1f5DXh0Z+j84yvjSdbaAUMlK8lZfxY6Oe2dw9CqkxSdnCra/5TUtROMvujxPCt5CtledVnjZXGLlwVVx8vNxl80tXHVeAfX50p9cCR/I6wDOEJMWo8ako1+2HGU9lEyhvE4D0aGOyhjt4QfEZbW25Eeq/cPoAvD2oUv9gpD+qhpre9Vfz0oMC4Ji/fU1N9e2qendPGv9wILlOFI4zGO3fVzYR0wWZKMJOIk0z85tm5vzv0/DfMrEUSC6My1jnW8mKw7BcOLw0eH7bs+JakuEhs/D58UPtIbKQ+s6lv9+6uUrSQrySfx2/1h4YPD+4V3C/PTZ5vNHJtXhLeELwx/Mcwnls+ElT+pK7fWnaZhIkk5Da6PNImXuJCY4qXO5rFGbUFz3A2lxB4dwG5YE78/3z7MtzmeLdl9CCTO4DmJn2H51YckvTx8TXiS2Alw5FYHTg5Y5zbBxSZs93FlnSHNVT8NL/HbDvuvWqLWXiFgrkpXaX2/S10ZN5TAd7HpBjnmVzlR64Bgp0z/LLvdhSllxm/Qhgc2PLDhgQ0PbHhgwwMbHtjwwIYHNjyw4YFtPPD/AQotzVGIGZcAAAAASUVORK5CYII=";
const logoId = "Dekk_LOGO";
const logo = `<img src="cid:${logoId}" alt="logo" height="50px"/>`;

answers.de.html = `<!DOCTYPE html>
<html lang="de">
<body>
	<header style="text-align: center">${logo}</header>
	<main>
		<h1>${answers.de.title}</h1>
		<p>${answers.de.text}</p>
	</main>
	<footer><p>${answers.de.signature}</p></footer>

</body>
</html>`;

answers.en.html = `<!DOCTYPE html>
<html lang="en">
<body>
	<header style="text-align: center">${logo}</header>
	<main>
		<h1>${answers.en.title}</h1>
		<p>${answers.en.text}</p>
	</main>
	<footer><p>${answers.en.signature}</p></footer>

</body>
</html>`;

const transporter = nodemailer.createTransport({
	port: 465,
	host: "smtp.gmail.com",
	secure: true,
	auth: {
		type: "OAuth2",
		// ToDo we might use a user account for the homepage to get notified
		//  when a message has been sent to this group and have the correct
		//  sender in the email
		// If this user is part of the google group they will not be notified
		user: "greg@dekk.app",
		serviceClient: process.env.CONTACT_SERVICE_CLIENT,
		privateKey: getDecryptedSecret(),
	},
});

const handler: NextApiHandler = async (request, response) => {
	const body = request.body as ContactFormProps;
	const locale = request.query.locale as "de" | "en";
	try {
		await transporter.verify();
		await transporter.sendMail({
			// The email address of the service-account
			// This also works if this is any other email. It does not seem to
			// have any impact on the behavior
			from: process.env.CONTACT_CLIENT_EMAIL,
			sender: body.email,
			// The google group we send to
			to: "contact@dekk.app",
			replyTo: body.email,
			subject: `Contact via Homepage from ${body.email}`,
			text: body.body,
		});
		// Send a success email
		await transporter.sendMail({
			// ToDo this does not add the correct sender.
			//  expected Dekk <contact@dekk.app>
			//  actual Dekk <greg@dekk.app>
			from: {
				name: "Dekk",
				address: "contact@dekk.app",
			},
			sender: {
				name: "Dekk",
				address: "contact@dekk.app",
			},
			// The person that contacted us
			to: body.email,
			subject: answers[locale].subject,
			text: answers[locale].text,
			html: answers[locale].html,
			attachments: [
				{
					path: base64Logo,
					cid: logoId,
				},
			],
		});
		response.send({ status: 200 });
	} catch (error_: unknown) {
		response.send({ status: 500, error: error_ });
	}
};

export default handler;
